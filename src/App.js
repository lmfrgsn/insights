import React, { Fragment, useState } from "react";

import logo from './logo.svg';
import {
  Button, TextInput, Card, Text, Metric, Title, LineChart, DonutChart, AreaChart, BarChart, Grid, TabGroup, Tab, TabList, TabPanel, TabPanels, Flex, BarList, Bold, Legend, SelectItem, Select, DateRangePicker, DateRangePickerItem, Icon, MultiSelect, MultiSelectItem, BadgeDelta
} from "@tremor/react";
import { Dialog, Transition } from "@headlessui/react";
import { ExpandIcon, SearchIcon } from 'lucide-react';
import { popularContentDay, popularContentWeek } from "./data/popularContent";
import { userLoginsWeek, userLoginsDay } from "./data/userLogins";
import { devices } from "./data/devices";
import { viewsDay, viewsWeek, viewsDay2, viewsWeek2 } from "./data/views";
import { blocks, blocksViewsDay, blocksViewsWeek } from "./data/blocks";
import { searchTerms } from "./data/searchTerms";
// import { ugc } from "./data/ugc";
import { groups } from "./data/groups";
import './App.css';

// const data = [
//   {
//     Month: "Jan 21",
//     Sales: 2890,
//     Profit: 2400,
//     Customers: 4938,
//     icon: function Icon() {
//       return (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path fillRule="evenodd" clipRule="evenodd" d="M5.08404 2.57991C5.84727 2.26299 6.66554 2.09985 7.49195 2.09985C8.31836 2.09985 9.13663 2.26299 9.89986 2.57991C10.6631 2.89682 11.3562 3.36129 11.9396 3.94666L11.9428 3.94994L12.0001 4.00793L12.0573 3.94994L12.0606 3.94666C12.6439 3.36129 13.3371 2.89682 14.1003 2.57991C14.8635 2.26299 15.6818 2.09985 16.5082 2.09985C17.3346 2.09985 18.1529 2.26299 18.9161 2.57991C19.6791 2.89671 20.372 3.36097 20.9552 3.94606C23.4521 6.44364 23.5077 10.5732 20.549 13.5874L20.5426 13.5938L12.6938 21.4426C12.5098 21.6266 12.2603 21.73 12.0001 21.73C11.7399 21.73 11.4903 21.6266 11.3063 21.4426L3.45115 13.5874C0.492464 10.5733 0.548014 6.44363 3.04493 3.94605C3.62814 3.36096 4.32108 2.89671 5.08404 2.57991Z" fill="#D12E3C" />
//         </svg>
//       );
//     },
//   },
//   {
//     Month: "Feb 21",
//     Sales: 1890,
//     Profit: 1398,
//     Customers: 2938,
//     icon: function Icon() {
//       return (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path fillRule="evenodd" clipRule="evenodd" d="M5.08404 2.57991C5.84727 2.26299 6.66554 2.09985 7.49195 2.09985C8.31836 2.09985 9.13663 2.26299 9.89986 2.57991C10.6631 2.89682 11.3562 3.36129 11.9396 3.94666L11.9428 3.94994L12.0001 4.00793L12.0573 3.94994L12.0606 3.94666C12.6439 3.36129 13.3371 2.89682 14.1003 2.57991C14.8635 2.26299 15.6818 2.09985 16.5082 2.09985C17.3346 2.09985 18.1529 2.26299 18.9161 2.57991C19.6791 2.89671 20.372 3.36097 20.9552 3.94606C23.4521 6.44364 23.5077 10.5732 20.549 13.5874L20.5426 13.5938L12.6938 21.4426C12.5098 21.6266 12.2603 21.73 12.0001 21.73C11.7399 21.73 11.4903 21.6266 11.3063 21.4426L3.45115 13.5874C0.492464 10.5733 0.548014 6.44363 3.04493 3.94605C3.62814 3.36096 4.32108 2.89671 5.08404 2.57991Z" fill="#D12E3C" />
//         </svg>
//       );
//     },
//   },
//   // ...
//   {
//     Month: "Jul 21",
//     Sales: 3490,
//     Profit: 4300,
//     Customers: 2345,
//     icon: function Icon() {
//       return (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path fillRule="evenodd" clipRule="evenodd" d="M5.08404 2.57991C5.84727 2.26299 6.66554 2.09985 7.49195 2.09985C8.31836 2.09985 9.13663 2.26299 9.89986 2.57991C10.6631 2.89682 11.3562 3.36129 11.9396 3.94666L11.9428 3.94994L12.0001 4.00793L12.0573 3.94994L12.0606 3.94666C12.6439 3.36129 13.3371 2.89682 14.1003 2.57991C14.8635 2.26299 15.6818 2.09985 16.5082 2.09985C17.3346 2.09985 18.1529 2.26299 18.9161 2.57991C19.6791 2.89671 20.372 3.36097 20.9552 3.94606C23.4521 6.44364 23.5077 10.5732 20.549 13.5874L20.5426 13.5938L12.6938 21.4426C12.5098 21.6266 12.2603 21.73 12.0001 21.73C11.7399 21.73 11.4903 21.6266 11.3063 21.4426L3.45115 13.5874C0.492464 10.5733 0.548014 6.44363 3.04493 3.94605C3.62814 3.36096 4.32108 2.89671 5.08404 2.57991Z" fill="#D12E3C" />
//         </svg>
//       );
//     },
//   },
// ];

const dataFormatter = (number) => `${Intl.NumberFormat("uk").format(number).toString()}%`;
const valueFormatter = (number) => `${Intl.NumberFormat("uk").format(number).toString()}`;

function App() {

  const [week, setWeek] = useState('false');

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredpages = popularContentDay.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const [value, setValue] = useState({
    from: new Date(2023, 1, 1),
    to: new Date(),
  });

  // get yyyy,mm,dd
  const today = new Date();
  let dd = today.getDate();

  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  // yyyy,mm,dd

  // if (week) {
  //   alert('test');
  // }


  function handleWeekClick() {
    setWeek(true);
  };

  function handleDayClick() {
    setWeek(false);

    // window.location.reload(false);
  };

  function handleTodayClick() {
    setWeek(false);

    viewsDay.length = 16;
    popularContentDay.length = 16;
    userLoginsDay.length = 16;
    blocksViewsDay.length = 16;

  };

  return (
    <div className="App">
      <header className="App-header bg-white p-4 mb-4 px-4">
        <div className="container mx-auto flex items-center">
          <img src={logo} className="App-logo mr-24" alt="logo" />
          <p className="text-gray-500 font-medium text-sm mr-8 hidden sm:inline-block">Home</p>
          <p className="text-gray-500 font-medium text-sm mr-8 hidden sm:inline-block">Org Settings</p>
          <p className="text-gray-500 font-medium text-sm mr-8 active-nav-item">Insights</p>
          <p className="text-gray-500 font-medium text-sm mr-8 hidden sm:inline-block">Locker Management</p>
          <p className="text-gray-500 font-medium text-sm mr-8 hidden sm:inline-block">Planner</p>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <TabGroup>
          <TabList className="mt-8">
            <Tab>Overview</Tab>
            <Tab>Compare</Tab>
            <Tab>Groups</Tab>
            <Tab>Reports</Tab>
            <Tab>Search</Tab>
            <Tab>Notifications</Tab>
            <Tab>Activity Feed</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6  border-b pb-4">

                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Show Inisghts for</Text>

                  {/* <DateRangePicker className="max-w-sm mx-auto" value="ytd"
                    onValueChange={setValue}
                  >
                    <DateRangePickerItem key="ytd" value="ytd" from={new Date().getDate()}>
                      Today
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="half"
                      value="half"
                      from={new Date().getDate() - 2}
                      to={new Date().getDate() - 1}
                    >
                      Yesterday
                    </DateRangePickerItem>
                  </DateRangePicker> */}

                  <DateRangePicker
                    className="max-w-md mx-auto"
                    value={value}
                    onValueChange={setValue}
                    selectPlaceholder="Select"
                    color="rose"
                  >

                    <DateRangePickerItem key="today" value="today" from={new Date()} to={new Date()} onClick={handleTodayClick}>
                      Today
                    </DateRangePickerItem>
                    <DateRangePickerItem key="yesterday" value="yesterday" from={new Date(yyyy, mm - 1, dd - 1)} to={new Date(yyyy, mm - 1, dd - 1)} onClick={handleDayClick}>
                      Yesterday
                    </DateRangePickerItem>
                    <DateRangePickerItem key="7days" value="7days" from={new Date(yyyy, mm - 1, dd - 7)} onClick={handleWeekClick}>
                      Last 7 Days
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="mtd"
                      value="mtd"
                      from={new Date(yyyy, mm - 1, 1)}
                      to={new Date(yyyy, mm - 1, dd)}
                    >
                      Month to Date
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="half"
                      value="half"
                      from={new Date(2023, 0, 1)}
                      to={new Date(2023, 5, 31)}
                    >
                      Last 6 months
                    </DateRangePickerItem>
                    <DateRangePickerItem key="ytd" value="ytd" from={new Date(2023, 0, 1)}>
                      Year to date
                    </DateRangePickerItem>
                  </DateRangePicker>

                </div>
                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Exclude</Text>
                  <MultiSelect>
                    <MultiSelectItem value="1">Recognition Posts</MultiSelectItem>
                    <MultiSelectItem value="2">User Generated Content</MultiSelectItem>
                    {/* <MultiSelectItem value="3">Home Page</MultiSelectItem> */}

                  </MultiSelect>
                </div>
                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Workspace</Text>
                  <Select value="1">
                    <SelectItem value="1">
                      All
                    </SelectItem>
                    <SelectItem value="2">
                      Engage
                    </SelectItem>
                    <SelectItem value="3">
                      Test Environment
                    </SelectItem>
                  </Select>
                </div>

              </Grid>
              <Grid numItemsSm={1} numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between lg:col-span-2'>
                  {/* <Title>Active Users</Title> */}

                  <Flex alignItems="start">
                    <Text className="mb-2"><Bold>Active Users</Bold></Text>
                  </Flex>
                  <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                    <Metric>{week ? 543 : 76}</Metric>
                  </Flex>
                  <LineChart
                    className="mt-6"
                    data={week ? userLoginsWeek : userLoginsDay}
                    index={week ? "day" : "hour"}
                    categories={["Logged In", "Registered"]}
                    colors={["emerald", "cyan"]}
                    // valueFormatter={dataFormatter}
                    yAxisWidth={40}
                    startEndOnly={week ? false : true}
                    showLegend={false}
                    autoMinValue={true}
                    curveType={week ? "linear" : "natural"}
                  />
                </Card>
                <Card className='flex flex-col justify-between'>
                  <Title>Devices</Title>
                  <DonutChart
                    className="mt-6"
                    data={devices}
                    category="sales"
                    index="name"
                    valueFormatter={dataFormatter}
                    variant="pie"
                    colors={["cyan", "green", "indigo"]}
                  />
                  <Legend
                    className="mt-3"
                    categories={["iOS", "Android", "WebApp"]}
                    colors={["cyan", "green", "indigo"]}
                  />
                </Card>
              </Grid>

              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                  <Flex alignItems="start">
                    <Text className="mb-2"><Bold>Content Views</Bold></Text>
                  </Flex>
                  <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                    <Metric>{week ? 1568 : 369}</Metric>
                  </Flex>
                  <AreaChart
                    className="h-72 mt-4"
                    data={week ? viewsWeek : viewsDay}
                    index={week ? "day" : "hour"}
                    categories={["Views"]}
                    colors={["indigo", "cyan"]}
                    startEndOnly={week ? false : true}
                    showLegend={false}
                    curveType={week ? "linear" : "natural"}
                    yAxisWidth={30}
                  />
                </Card>
                <Card>
                  <Title>Popular Content</Title>
                  {/* <Flex alignItems="center" justifyContent="between">
                    <Text className="text-base text-gray-700 font-medium">Top Pages</Text>
                    <Text className="uppercase">Visitors</Text>
                  </Flex> */}

                  <TabGroup>
                    <TabList className="mt-2">
                      <Tab>Views</Tab>
                      <Tab>Unique Views</Tab>
                      <Tab>Likes</Tab>
                      <Tab>Comments</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <BarList
                          data={week ? popularContentWeek.slice(0, 5) : popularContentDay.slice(0, 5)}
                          className="mt-8"
                          showAnimation={false}
                          valueFormatter={valueFormatter}
                        />
                        <Button
                          icon={ExpandIcon}
                          className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                          onClick={openModal}
                        >
                          Show More
                        </Button>
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                </Card>
              </Grid>
              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed inset-0 bg-gray-900 bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                          as={Fragment}
                          enter="ease-out duration-300"
                          enterFrom="opacity-0 scale-95"
                          enterTo="opacity-100 scale-100"
                          leave="ease-in duration-200"
                          leaveFrom="opacity-100 scale-100"
                          leaveTo="opacity-0 scale-95"
                        >
                          <Dialog.Panel
                            className="w-full max-w-xl transform overflow-hidden ring-tremor bg-white
                                    p-6 text-left align-middle shadow-tremor transition-all rounded-xl"
                          >
                            <Flex alignItems="center" justifyContent="between">
                              <Text className="text-base text-gray-700 font-medium">Top Pages</Text>
                              <Text className="uppercase">Views</Text>
                            </Flex>
                            <TextInput
                              icon={SearchIcon}
                              placeholder="Search..."
                              className="mt-6"
                              onChange={(event) => setSearchQuery(event.target.value)}
                            />
                            <div className="relative mt-4 h-[450px] overflow-y-scroll">
                              <BarList
                                data={filteredpages}
                                className="mr-4 -mb-10" // to give room for scrollbar
                                showAnimation={false}
                                valueFormatter={valueFormatter}
                              />
                              <div className=" inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white to-transparent h-20 sticky" />
                            </div>
                            <Button
                              className="mt-2 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                              onClick={closeModal}
                            >
                              Back
                            </Button>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </Grid>

              <Grid numItemsSm={2} numItemsLg={4} className="gap-6">
                {blocks.map((item) => (
                  <Card key={item.title}>
                    <Flex alignItems="start">
                      <Text className="mb-2">{item.title}</Text>
                      {/* <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta> */}
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                      <Icon icon={item.icon} variant="light" size="xs" color="neutral" tooltip={`${item.metric} ${item.title}`} />
                      <Metric>{item.metric}</Metric>
                      {/* <Text>from {item.metricPrev}</Text> */}
                    </Flex>
                    <AreaChart
                      className="h-28 mt-8"
                      data={week ? blocksViewsWeek : blocksViewsDay}
                      index={week ? "day" : "hour"}
                      categories={["Views"]}
                      colors={[`${item.graphColor}`]}
                      startEndOnly={true}
                      showLegend={false}
                      showXAxis={week ? true : false}
                      showYAxis={false}
                      showGridLines={false}
                      curveType="natural"

                    />
                  </Card>
                ))}
              </Grid>

              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Card>
                  <Title>Popular Lists</Title>
                  <TabGroup>
                    <TabList className="mt-2">
                      <Tab>Views</Tab>
                      <Tab>Unique Views</Tab>
                      <Tab>Likes</Tab>
                      <Tab>Comments</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <BarList
                          data={week ? popularContentWeek.slice(0, 5) : popularContentDay.slice(0, 5)}
                          className="mt-8"
                          showAnimation={false}
                          valueFormatter={valueFormatter}
                        />
                        <Button
                          icon={ExpandIcon}
                          className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                          onClick={openModal}
                        >
                          Show More
                        </Button>
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                </Card>
                <Card className='flex flex-col justify-between'>
                  <Title>Groups Activity</Title>
                  <BarChart
                    className="mt-6"
                    data={groups}
                    index="name"
                    categories={["Views", "Comments", "Likes"]}
                    colors={["blue", "indigo", "cyan"]}
                    yAxisWidth={48}
                  // showLegend={false}
                  />
                </Card>
              </Grid>

            </TabPanel>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">

                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Show Inisghts for:</Text>

                  <DateRangePicker
                    className="max-w-md mx-auto"
                    value={value}
                    onValueChange={setValue}
                    selectPlaceholder="Select"
                    color="rose"
                  >

                    <DateRangePickerItem key="today" value="today" from={new Date()} to={new Date()} onClick={handleTodayClick}>
                      Today
                    </DateRangePickerItem>
                    <DateRangePickerItem key="yesterday" value="yesterday" from={new Date(yyyy, mm - 1, dd - 1)} to={new Date(yyyy, mm - 1, dd)} onClick={handleDayClick}>
                      Yesterday
                    </DateRangePickerItem>
                    <DateRangePickerItem key="7days" value="7days" from={new Date(yyyy, mm - 1, dd - 7)} onClick={handleWeekClick}>
                      Last 7 Days
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="mtd"
                      value="mtd"
                      from={new Date(yyyy, mm - 1, 1)}
                      to={new Date(yyyy, mm - 1, dd)}
                    >
                      Month to Date
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="half"
                      value="half"
                      from={new Date(2023, 0, 1)}
                      to={new Date(2023, 5, 31)}
                    >
                      Last 6 months
                    </DateRangePickerItem>
                    <DateRangePickerItem key="ytd" value="ytd" from={new Date(2023, 0, 1)}>
                      Year to date
                    </DateRangePickerItem>
                  </DateRangePicker>

                </div>
                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Compare Against:</Text>

                  <DateRangePicker
                    className="max-w-md mx-auto"
                    value={value}
                    onValueChange={setValue}
                    selectPlaceholder="Select"
                    color="rose"
                  >

                    <DateRangePickerItem key="today" value="today" from={new Date()} to={new Date()} onClick={handleTodayClick}>
                      Today
                    </DateRangePickerItem>
                    <DateRangePickerItem key="yesterday" value="yesterday" from={new Date(yyyy, mm - 1, dd - 1)} to={new Date(yyyy, mm - 1, dd - 1)} onClick={handleDayClick}>
                      Yesterday
                    </DateRangePickerItem>
                    <DateRangePickerItem key="7days" value="7days" from={new Date(yyyy, mm - 1, dd - 7)} onClick={handleWeekClick}>
                      Last 7 Days
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="mtd"
                      value="mtd"
                      from={new Date(yyyy, mm - 1, 1)}
                      to={new Date(yyyy, mm - 1, dd)}
                    >
                      Month to Date
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="half"
                      value="half"
                      from={new Date(2023, 0, 1)}
                      to={new Date(2023, 5, 31)}
                    >
                      Last 6 months
                    </DateRangePickerItem>
                    <DateRangePickerItem key="ytd" value="ytd" from={new Date(2023, 0, 1)}>
                      Year to date
                    </DateRangePickerItem>
                  </DateRangePicker>

                </div>
                <div className='flex items-center'>

                </div>
              </Grid>
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6 border-b pb-4 mb-4">

                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Content Items</Text>
                  <MultiSelect>
                    <MultiSelectItem value="1">"Share Your Best Logistics Success Story and Win Exciting Prizes!"</MultiSelectItem>
                    <MultiSelectItem value="2">"Join the Fun: Logistics Trivia Challenge - Test Your Knowledge!"</MultiSelectItem>
                    <MultiSelectItem value="3">"Calling All Logistics Enthusiasts: Submit Your Innovative Ideas for Process Improvement!"</MultiSelectItem>
                    <MultiSelectItem value="4">"Logistics Photo Contest: Show Us Your Favorite On-the-Job Moments!"</MultiSelectItem>
                    <MultiSelectItem value="5">"Employee Spotlight: Recognizing Outstanding Contributions in Logistics!"</MultiSelectItem>
                    <MultiSelectItem value="6">"Get Active: Join our Logistics Step Challenge and Win Fitness Goodies!"</MultiSelectItem>
                    <MultiSelectItem value="7">"Announcing the Logistics Book Club: Expand Your Knowledge and Join the Discussion!"</MultiSelectItem>
                    <MultiSelectItem value="8">"Let's Celebrate! Join us for a Virtual Happy Hour with the Logistics Team!"</MultiSelectItem>
                    <MultiSelectItem value="9">"Time to Unwind: Join our Logistics Gaming Tournament and Claim the Champion Title!"</MultiSelectItem>
                    <MultiSelectItem value="10">"Spread the Joy: Share Heartwarming Customer Testimonials and Inspire Others!"</MultiSelectItem>
                  </MultiSelect>
                </div>
                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>User Groups</Text>
                  <MultiSelect>
                    <MultiSelectItem value="1">Global Team</MultiSelectItem>
                    <MultiSelectItem value="2">Route Planners</MultiSelectItem>
                    <MultiSelectItem value="3">Innovation Crew</MultiSelectItem>
                    <MultiSelectItem value="4">Photo Enthusiasts</MultiSelectItem>
                    <MultiSelectItem value="5">Supply Chain Heroes</MultiSelectItem>
                    <MultiSelectItem value="6">Fitness Buddies</MultiSelectItem>
                    <MultiSelectItem value="7">Book Clubbers</MultiSelectItem>
                    <MultiSelectItem value="8">Virtual Hangout Group</MultiSelectItem>
                    <MultiSelectItem value="9">Gaming Squad</MultiSelectItem>
                    <MultiSelectItem value="10">Customer Support Team</MultiSelectItem>
                  </MultiSelect>
                </div>
                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Workspace</Text>
                  <Select value="1">
                    <SelectItem value="1">
                      All
                    </SelectItem>
                    <SelectItem value="2">
                      Engage
                    </SelectItem>
                    <SelectItem value="3">
                      Test Environment
                    </SelectItem>
                  </Select>
                </div>

              </Grid>

              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                  <Flex alignItems="start">
                    <Text className="mb-2"><Bold>Content Views ({week ? 'July 9, 2023 - July 14 2023' : 'August 1, 2023'})</Bold></Text>
                  </Flex>
                  <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                    <Metric>{week ? 1568 : 369}</Metric>
                  </Flex>
                  <AreaChart
                    className="h-72 mt-4"
                    data={week ? viewsWeek : viewsDay}
                    index={week ? "day" : "hour"}
                    categories={["Views"]}
                    colors={["indigo", "cyan"]}
                    startEndOnly={week ? false : true}
                    showLegend={false}
                    curveType={week ? "linear" : "natural"}
                    yAxisWidth={30}
                  />
                </Card>
                <Card className='flex flex-col justify-between'>
                  <Flex alignItems="start">
                    <Text className="mb-2"><Bold>Content Views ({week ? 'July 23, 2023 - July 28 2023' : 'July 30, 2023'})</Bold></Text>
                  </Flex>
                  <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                    <Metric>{week ? 1343 : 401}</Metric>
                  </Flex>
                  <AreaChart
                    className="h-72 mt-4"
                    data={week ? viewsWeek2 : viewsDay2}
                    index={week ? "day" : "hour"}
                    categories={["Views"]}
                    colors={["indigo", "cyan"]}
                    startEndOnly={week ? false : true}
                    showLegend={false}
                    curveType={week ? "linear" : "natural"}
                    yAxisWidth={30}
                  />
                </Card>
              </Grid>

              <Grid numItemsSm={2} numItemsLg={4} className="gap-6 mt-6">
                {blocks.map((item) => (
                  <Card key={item.title}>
                    <Flex alignItems="start">
                      <Text className="mb-2">{item.title}</Text>
                      <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
                    </Flex>
                    <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                      <Icon icon={item.icon} variant="light" size="xs" color="neutral" tooltip="Up 20" />
                      <Metric>{item.metric}</Metric>
                      <Text>vs. <Bold>{item.metricPrev}</Bold></Text>
                    </Flex>
                    {/* <AreaChart
                      className="h-28 mt-8"
                      data={week ? blocksViewsWeek : blocksViewsDay}
                      index={week ? "day" : "hour"}
                      categories={["Views"]}
                      colors={[`${item.graphColor}`]}
                      startEndOnly={true}
                      showLegend={false}
                      showXAxis={week ? true : false}
                      showYAxis={false}
                      showGridLines={false}
                      curveType="natural"

                    /> */}
                  </Card>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel>
              3
            </TabPanel>
            <TabPanel>
              4
            </TabPanel>
            <TabPanel>
              <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6  border-b pb-4">

                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Show Inisghts for</Text>

                  {/* <DateRangePicker className="max-w-sm mx-auto" value="ytd"
    onValueChange={setValue}
  >
    <DateRangePickerItem key="ytd" value="ytd" from={new Date().getDate()}>
      Today
    </DateRangePickerItem>
    <DateRangePickerItem
      key="half"
      value="half"
      from={new Date().getDate() - 2}
      to={new Date().getDate() - 1}
    >
      Yesterday
    </DateRangePickerItem>
  </DateRangePicker> */}

                  <DateRangePicker
                    className="max-w-md mx-auto"
                    value={value}
                    onValueChange={setValue}
                    selectPlaceholder="Select"
                    color="rose"
                  >

                    <DateRangePickerItem key="today" value="today" from={new Date()} to={new Date()} onClick={handleTodayClick}>
                      Today
                    </DateRangePickerItem>
                    <DateRangePickerItem key="yesterday" value="yesterday" from={new Date(yyyy, mm - 1, dd - 1)} to={new Date(yyyy, mm - 1, dd - 1)} onClick={handleDayClick}>
                      Yesterday
                    </DateRangePickerItem>
                    <DateRangePickerItem key="7days" value="7days" from={new Date(yyyy, mm - 1, dd - 7)} onClick={handleWeekClick}>
                      Last 7 Days
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="mtd"
                      value="mtd"
                      from={new Date(yyyy, mm - 1, 1)}
                      to={new Date(yyyy, mm - 1, dd)}
                    >
                      Month to Date
                    </DateRangePickerItem>
                    <DateRangePickerItem
                      key="half"
                      value="half"
                      from={new Date(2023, 0, 1)}
                      to={new Date(2023, 5, 31)}
                    >
                      Last 6 months
                    </DateRangePickerItem>
                    <DateRangePickerItem key="ytd" value="ytd" from={new Date(2023, 0, 1)}>
                      Year to date
                    </DateRangePickerItem>
                  </DateRangePicker>

                </div>
                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>User Groups</Text>
                  <MultiSelect>
                    <MultiSelectItem value="1">Global Team</MultiSelectItem>
                    <MultiSelectItem value="2">Route Planners</MultiSelectItem>
                    <MultiSelectItem value="3">Innovation Crew</MultiSelectItem>
                    <MultiSelectItem value="4">Photo Enthusiasts</MultiSelectItem>
                    <MultiSelectItem value="5">Supply Chain Heroes</MultiSelectItem>
                    <MultiSelectItem value="6">Fitness Buddies</MultiSelectItem>
                    <MultiSelectItem value="7">Book Clubbers</MultiSelectItem>
                    <MultiSelectItem value="8">Virtual Hangout Group</MultiSelectItem>
                    <MultiSelectItem value="9">Gaming Squad</MultiSelectItem>
                    <MultiSelectItem value="10">Customer Support Team</MultiSelectItem>
                  </MultiSelect>
                </div>
                <div className='flex items-center'>
                  <Text className='mr-2 flex-none'>Workspace</Text>
                  <Select value="1">
                    <SelectItem value="1">
                      All
                    </SelectItem>
                    <SelectItem value="2">
                      Engage
                    </SelectItem>
                    <SelectItem value="3">
                      Test Environment
                    </SelectItem>
                  </Select>
                </div>

              </Grid>

              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                  <Flex alignItems="start">
                    <Text className="mb-2"><Bold>Search Volume</Bold></Text>
                  </Flex>
                  <Flex className="space-x-3 truncate" justifyContent="start" alignItems="baseline">
                    <Metric>{week ? 1568 : 369}</Metric>
                  </Flex>
                  <AreaChart
                    className="h-72 mt-4"
                    data={week ? viewsWeek : viewsDay}
                    index={week ? "day" : "hour"}
                    categories={["Views"]}
                    colors={["cyan"]}
                    startEndOnly={week ? false : true}
                    showLegend={false}
                    curveType={week ? "linear" : "natural"}
                    yAxisWidth={30}
                  />
                </Card>
                <Card>
                  <Title>Top Search Terms</Title>
                  {/* <Flex alignItems="center" justifyContent="between">
                    <Text className="text-base text-gray-700 font-medium">Top Pages</Text>
                    <Text className="uppercase">Visitors</Text>
                  </Flex> */}

                  <TabGroup>
                    <TabList className="mt-2">
                      <Tab>Search Terms</Tab>
                      <Tab>Zero Result Searches</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <BarList
                          data={searchTerms.slice(0, 5)}
                          className="mt-8"
                          showAnimation={false}
                          valueFormatter={valueFormatter}
                        />
                        <Button
                          icon={ExpandIcon}
                          className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                          onClick={openModal}
                        >
                          Show More
                        </Button>
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                </Card>
              </Grid>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <div className="my-16 flex justify-center text-sm text-gray-400">
          <p>© 2023 Thrive.App Ltd.</p>
          <p className="mx-12">Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
}

export default App;
