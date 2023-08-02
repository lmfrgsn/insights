import React, { useState } from "react";

import {
    Card, Text, Title, BarChart, Grid, SelectItem, Select, DateRangePicker, DateRangePickerItem, MultiSelect, MultiSelectItem, ScatterChart
} from "@tremor/react";
// import { Dialog, Transition } from "@headlessui/react";
import { groups, groupsScatter } from "../data/groups";

export default function Groups() {

    const [setWeek] = useState('false');

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

    };

    return (<>
        <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-4  border-b pb-4">

            <div className='flex items-center'>
                <Text className='mr-2 flex-none'>Show Insights for</Text>
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
                <Title>Groups Activity</Title>
                <Text>The most active user groups, relative to their number of users.</Text>
                <ScatterChart
                    className="h-80 mt-6 -ml-2"
                    yAxisWidth={50}
                    data={groupsScatter}
                    category="Group_Name"
                    x="Members"
                    y="Views"
                    size="Comments"
                    showOpacity={true}
                    // minYValue={60}
                    // valueFormatter={{
                    //   x: (amount) => `$${(amount / 1000).toFixed(1)}K`,
                    //   y: (lifeExp) => `${lifeExp} yrs`,
                    //   size: (population) => `${(population / 1000000).toFixed(1)}M people`,
                    // }}
                    showLegend={false}
                    showXAxis={true}
                    showYAxis={true}
                />
            </Card>
            <Card className='flex flex-col justify-between'>
                <Title>Most Active Groups</Title>
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
    </>)
}