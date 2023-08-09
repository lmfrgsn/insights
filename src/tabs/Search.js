import React, { useState } from "react";

import {
    Button, Card, Text, Metric, Title, AreaChart, Grid, TabGroup, Tab, TabList, TabPanel, TabPanels, Flex, BarList, Bold, SelectItem, Select, DateRangePicker, DateRangePickerItem, MultiSelect, MultiSelectItem
} from "@tremor/react";
// import { Dialog, Transition } from "@headlessui/react";
import { ExpandIcon } from 'lucide-react';
import { popularContentDay } from "../data/popularContent";
import { userLoginsDay } from "../data/userLogins";
import { viewsDay, viewsWeek } from "../data/views";
import { blocksViewsDay } from "../data/blocks";
import { searchTerms } from "../data/searchTerms";

const valueFormatter = (number) => `${Intl.NumberFormat("uk").format(number).toString()}`;

export default function Search() {

    const [setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const [week, setWeek] = useState('false');

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
        </>
    )
}