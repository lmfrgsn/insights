import React, { Fragment, useState } from "react";

import {
    Button, TextInput, Card, Text, Metric, Title, LineChart, DonutChart, AreaChart, BarChart, Grid, TabGroup, Tab, TabList, TabPanel, TabPanels, Flex, BarList, Bold, Legend, SelectItem, Select, DateRangePicker, DateRangePickerItem, Icon, MultiSelect, MultiSelectItem
} from "@tremor/react";
import { Dialog, Transition } from "@headlessui/react";
import { ExpandIcon, SearchIcon } from 'lucide-react';
import { popularContentDay, popularContentWeek } from "../data/popularContent";
import { userLoginsWeek, userLoginsDay } from "../data/userLogins";
import { devices } from "../data/devices";
import { viewsDay, viewsWeek } from "../data/views";
import { blocks, blocksViewsDay, blocksViewsWeek } from "../data/blocks";
import { groups } from "../data/groups";

export default function Overview() {

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

        viewsDay.length = 12;
        popularContentDay.length = 12;
        userLoginsDay.length = 12;
        blocksViewsDay.length = 12;

    };

    const dataFormatter = (number) => `${Intl.NumberFormat("uk").format(number).toString()}%`;
    const valueFormatter = (number) => `${Intl.NumberFormat("uk").format(number).toString()}`;

    return (
        <>
            <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-4  border-b pb-4">

                <div className='flex items-center'>
                    <Text className='mr-2 flex-none'>Show Inisghts for</Text>

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

                        data={week ? userLoginsWeek : userLoginsDay}
                        index={week ? "day" : "hour"}
                        categories={["Logged In", "Registered"]}
                        colors={["emerald", "cyan"]}
                        // valueFormatter={dataFormatter}
                        yAxisWidth={40}
                        startEndOnly={week ? false : true}
                        showLegend={true}
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
                            showXAxis={false}
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
        </>
    );
}