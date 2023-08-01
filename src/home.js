{/* <div class="container mx-auto px-4">

        <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6  border-b pb-4">
          <div className='flex items-center'>
            &nbsp;
          </div>
          <div className='flex items-center'>
            <Text className='mr-2 flex-none'>Date Range</Text>
            <Select value="1">
              <SelectItem value="1">
                Last 7 Days
              </SelectItem>
              <SelectItem value="2">
                Today
              </SelectItem>
              <SelectItem value="3">
                Last Week
              </SelectItem>
              <SelectItem value="4">
                Last Month
              </SelectItem>
              <SelectItem value="5">
                Last 3 Months
              </SelectItem>
              <SelectItem value="6">
                Lifetime
              </SelectItem>
              <SelectItem value="7">
                Custom Date
              </SelectItem>
            </Select>
          </div>
          <div className='flex items-center'>
            <Text className='mr-2 flex-none'>Workspace</Text>
            <Select value="1">
              <SelectItem value="1">
                Engage
              </SelectItem>
              <SelectItem value="2">
                Test Environment
              </SelectItem>
            </Select>
          </div>
        </Grid>
        <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6">
          <Card className="">
            <Text>Users</Text>
            <Metric>21,405</Metric>
          </Card>
          <Card className="">
            <Text>Content Items</Text>
            <Metric>11,002</Metric>
          </Card>
          <Card className="">
            <Text>Something Else</Text>
            <Metric>23</Metric>
          </Card>
        </Grid>
        <TabGroup className="mt-6">
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                  <Title>Users</Title>
                  <LineChart
                    className="mt-6"
                    data={chartdata}
                    index="year"
                    categories={["Registered", "Logged In"]}
                    colors={["emerald", "blue"]}
                    // valueFormatter={dataFormatter}
                    yAxisWidth={40}
                  />
                </Card>
                <Card className='flex flex-col justify-between'>
                  <Title>Total Content Views</Title>
                  <AreaChart
                    className="h-72 mt-4"
                    data={views}
                    index="date"
                    categories={["Views"]}
                    colors={["indigo", "cyan"]}
                    showLegend={false}
                  />
                </Card>
              </Grid>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <TabGroup className="mt-6">
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">

                <Card className="max-w-xl mx-auto">
                  <Flex alignItems="center" justifyContent="between">
                    <Text className="text-base text-gray-700 font-medium">Top Pages</Text>
                    <Text className="uppercase">Visitors</Text>
                  </Flex>
                  <BarList
                    data={data.slice(0, 5)}
                    className="mt-8"
                    showAnimation={false}
                    valueFormatter={valueFormatter}
                  />
                  <Button
                    icon={ExpandIcon}
                    className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                    onClick={openModal}
                  >
                    Show more
                  </Button>
                </Card>
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
                              <Text className="uppercase">Visitors</Text>
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
                                className="mr-4" // to give room for scrollbar
                                showAnimation={false}
                                valueFormatter={valueFormatter}
                              />
                              <div className="sticky inset-x-0 bottom-0 p-6 bg-gradient-to-t from-white to-transparent h-20" />
                            </div>
                            <Button
                              className="mt-2 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                              onClick={closeModal}
                            >
                              Go back
                            </Button>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>

                <Card className='flex flex-col justify-between'>
                  <Title>Content Popularity</Title>
                  <Flex className="mt-4">
                    <Text>
                      <Bold>Item</Bold>
                    </Text>
                    <Text>
                      <Bold>Visits</Bold>
                    </Text>
                  </Flex>
                  <BarList data={data} className="mt-2" />
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
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <TabGroup className="mt-6 mb-6">
          <TabPanels>
            <TabPanel>
              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6">
                <Card className='flex flex-col justify-between'>
                  <Title>Groups Activity</Title>
                  <BarChart
                    className="mt-6"
                    data={barchart}
                    index="name"
                    categories={["Views", "Comments", "Likes"]}
                    colors={["blue", "indigo", "cyan"]}
                    yAxisWidth={48}
                  // showLegend={false}
                  />
                </Card>
                <Card className='flex flex-col justify-between'>
                  <Title>User Generated Content</Title>
                  <AreaChart
                    className="h-72 mt-4"
                    data={ugc}
                    index="date"
                    categories={["Views"]}
                    colors={["cyan"]}
                    showLegend={false}
                  />
                </Card>
              </Grid>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div> */}