import React, { useState } from "react";

import {
    Card, Text, Metric, AreaChart, Grid, Flex, Bold, SelectItem, Select, DateRangePicker, DateRangePickerItem, Icon, MultiSelect, MultiSelectItem, BadgeDelta
} from "@tremor/react";
// import { Dialog, Transition } from "@headlessui/react";
// import { ExpandIcon, SearchIcon } from 'lucide-react';
import { popularContentDay } from "../data/popularContent";
import { userLoginsDay } from "../data/userLogins";
import { viewsDay, viewsWeek, viewsDay2, viewsWeek2 } from "../data/views";
import { blocks, blocksViewsDay } from "../data/blocks";

export default function Overview() {

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
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-4 border-b pb-4">

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

            </Grid>
            <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-4 border-b pb-4 mb-4">

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
                        </Flex>
                        <Flex className="space-x-3 truncate mb-4" justifyContent="start" alignItems="baseline">
                            <Icon icon={item.icon} variant="light" size="xs" color="neutral" tooltip="Up 20" />
                            <Metric>{item.metric}</Metric>
                            <Text>vs. <Bold>{item.metricPrev}</Bold></Text>
                        </Flex>
                        <Flex alignItems="start">
                            <BadgeDelta deltaType={item.deltaType}>{item.delta}</BadgeDelta>
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
        </>
    );
}