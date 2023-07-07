import logo from './logo.svg';
import {
  Card, Text, Metric, Title, LineChart, DonutChart, AreaChart, BarChart, Grid, Tab, TabList, TabGroup, TabPanel, TabPanels, Flex, BarList, Bold, Legend, SelectItem, Select, Subtitle
} from "@tremor/react";
import './App.css';

const chartdata = [
  {
    year: "Mon",
    "Registered": 0,
    "Logged In": 22,
  },
  {
    year: "Tue",
    "Registered": 1,
    "Logged In": 19,
  },
  {
    year: "Wed",
    "Registered": 2,
    "Logged In": 10,
  },
  {
    year: "Thur",
    "Registered": 0,
    "Logged In": 22,
  },
  {
    year: "Fri",
    "Registered": 1,
    "Logged In": 34,
  },
];

const devices = [
  {
    name: "iOS",
    sales: 34,
  },
  {
    name: "Android",
    sales: 42,
  },
  {
    name: "WebApp",
    sales: 24,
  }
];

const data = [
  {
    name: "Celebrate Our Team's Accomplishments at the Annual Awards Banquet",
    value: 456,
    href: "#",
    icon: function Icon() {
      return (
        <svg width="20" height="20" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="mr-2.5 fill-slate-500">
          <path fill="#203554" fill-rule="evenodd" clip-rule="evenodd" d="M13.8602 6.86016C15.6915 5.02883 18.1753 4 20.7652 4H48.6395C49.4899 4 50.3055 4.33783 50.9068 4.93916L68.9432 22.9756C69.5445 23.5769 69.8823 24.3925 69.8823 25.2429V66.2348C69.8823 68.8247 68.8535 71.3085 67.0222 73.1398C65.1909 74.9712 62.7071 76 60.1172 76H20.7652C18.1753 76 15.6915 74.9712 13.8602 73.1398C12.0288 71.3085 11 68.8247 11 66.2348V13.7652C11 11.1753 12.0288 8.69149 13.8602 6.86016ZM20.7652 10.4129C19.8761 10.4129 19.0235 10.7661 18.3948 11.3948C17.7662 12.0234 17.413 12.8761 17.413 13.7652V66.2348C17.413 67.1239 17.7662 67.9766 18.3948 68.6052C19.0235 69.2339 19.8761 69.5871 20.7652 69.5871H60.1172C61.0062 69.5871 61.8589 69.2339 62.4875 68.6052C63.1162 67.9766 63.4694 67.1239 63.4694 66.2348V26.5711L47.3113 10.4129H20.7652Z" />
          <path fill="#203554" fill-rule="evenodd" clip-rule="evenodd" d="M46.9995 4C48.7704 4 50.206 5.43558 50.206 7.20647V23.6761H66.6755C68.4464 23.6761 69.882 25.1117 69.882 26.8826C69.882 28.6535 68.4464 30.0891 66.6755 30.0891H46.9995C45.2286 30.0891 43.7931 28.6535 43.7931 26.8826V7.20647C43.7931 5.43558 45.2286 4 46.9995 4Z" />
        </svg>
      );
    },
  },
  {
    name: "New Company Wellness Program",
    value: 351,
    href: "#",
    icon: function Icon() {
      return (
        <svg width="20" height="20" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="mr-2.5 fill-slate-500">
          <path fill="#203554" fill-rule="evenodd" clip-rule="evenodd" d="M13.8602 6.86016C15.6915 5.02883 18.1753 4 20.7652 4H48.6395C49.4899 4 50.3055 4.33783 50.9068 4.93916L68.9432 22.9756C69.5445 23.5769 69.8823 24.3925 69.8823 25.2429V66.2348C69.8823 68.8247 68.8535 71.3085 67.0222 73.1398C65.1909 74.9712 62.7071 76 60.1172 76H20.7652C18.1753 76 15.6915 74.9712 13.8602 73.1398C12.0288 71.3085 11 68.8247 11 66.2348V13.7652C11 11.1753 12.0288 8.69149 13.8602 6.86016ZM20.7652 10.4129C19.8761 10.4129 19.0235 10.7661 18.3948 11.3948C17.7662 12.0234 17.413 12.8761 17.413 13.7652V66.2348C17.413 67.1239 17.7662 67.9766 18.3948 68.6052C19.0235 69.2339 19.8761 69.5871 20.7652 69.5871H60.1172C61.0062 69.5871 61.8589 69.2339 62.4875 68.6052C63.1162 67.9766 63.4694 67.1239 63.4694 66.2348V26.5711L47.3113 10.4129H20.7652Z" />
          <path fill="#203554" fill-rule="evenodd" clip-rule="evenodd" d="M46.9995 4C48.7704 4 50.206 5.43558 50.206 7.20647V23.6761H66.6755C68.4464 23.6761 69.882 25.1117 69.882 26.8826C69.882 28.6535 68.4464 30.0891 66.6755 30.0891H46.9995C45.2286 30.0891 43.7931 28.6535 43.7931 26.8826V7.20647C43.7931 5.43558 45.2286 4 46.9995 4Z" />
        </svg>
      );
    },
  },
  {
    name: "Latest News",
    value: 271,
    href: "#",
    icon: function Icon() {
      return (
        <svg fill="#203554" width="20" height="20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2.5 fill-slate-500">
          <path fill="#203554" fill-rule="evenodd" clip-rule="evenodd" d="M4 7.6C4 5.61177 5.61177 4 7.6 4H32.8C34.7882 4 36.4 5.61177 36.4 7.6V32.8C36.4 34.7882 34.7882 36.4 32.8 36.4H7.6C5.61177 36.4 4 34.7882 4 32.8V7.6ZM11.2 11.2V29.2H29.2V11.2H11.2ZM43.6 11.2C43.6 9.21177 45.2118 7.6 47.2 7.6H72.4C74.3882 7.6 76 9.21177 76 11.2C76 13.1882 74.3882 14.8 72.4 14.8H47.2C45.2118 14.8 43.6 13.1882 43.6 11.2ZM43.6 29.2C43.6 27.2118 45.2118 25.6 47.2 25.6H72.4C74.3882 25.6 76 27.2118 76 29.2C76 31.1882 74.3882 32.8 72.4 32.8H47.2C45.2118 32.8 43.6 31.1882 43.6 29.2ZM4 47.2C4 45.2118 5.61177 43.6 7.6 43.6H32.8C34.7882 43.6 36.4 45.2118 36.4 47.2V72.4C36.4 74.3882 34.7882 76 32.8 76H7.6C5.61177 76 4 74.3882 4 72.4V47.2ZM11.2 50.8V68.8H29.2V50.8H11.2ZM43.6 50.8C43.6 48.8118 45.2118 47.2 47.2 47.2H72.4C74.3882 47.2 76 48.8118 76 50.8C76 52.7882 74.3882 54.4 72.4 54.4H47.2C45.2118 54.4 43.6 52.7882 43.6 50.8ZM43.6 68.8C43.6 66.8118 45.2118 65.2 47.2 65.2H72.4C74.3882 65.2 76 66.8118 76 68.8C76 70.7882 74.3882 72.4 72.4 72.4H47.2C45.2118 72.4 43.6 70.7882 43.6 68.8Z" />
        </svg>
      );
    },
  },
  {
    name: "New Company Wellness Program",
    value: 191,
    href: "#",
    icon: function Icon() {
      return (
        <svg width="20" height="20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2.5 fill-slate-500">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8648 11.7143C13.1251 11.7143 11.7148 13.1246 11.7148 14.8643V65.1357C11.7148 66.8754 13.1251 68.2857 14.8648 68.2857H65.1362C66.8759 68.2857 68.2862 66.8754 68.2862 65.1357V14.8643C68.2862 13.1246 66.8759 11.7143 65.1362 11.7143H14.8648ZM4.00051 14.8643C4.00051 8.86411 8.86462 4 14.8648 4H65.1362C71.1364 4 76.0005 8.86411 76.0005 14.8643V65.1357C76.0005 71.1359 71.1364 76 65.1362 76H14.8648C8.86462 76 4.00051 71.1359 4.00051 65.1357V14.8643Z" fill="#203554" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9272 4C26.0574 4 27.7843 5.7269 27.7843 7.85714V72.1429C27.7843 74.2731 26.0574 76 23.9272 76C21.797 76 20.0701 74.2731 20.0701 72.1429V7.85714C20.0701 5.7269 21.797 4 23.9272 4Z" fill="#203554" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M56.0732 4C58.2034 4 59.9303 5.7269 59.9303 7.85714V72.1429C59.9303 74.2731 58.2034 76 56.0732 76C53.9429 76 52.216 74.2731 52.216 72.1429V7.85714C52.216 5.7269 53.9429 4 56.0732 4Z" fill="#203554" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.0002 40.0031C4.0002 37.8729 5.7271 36.146 7.85734 36.146H72.143C74.2733 36.146 76.0002 37.8729 76.0002 40.0031C76.0002 42.1334 74.2733 43.8603 72.143 43.8603H7.85734C5.7271 43.8603 4.0002 42.1334 4.0002 40.0031Z" fill="#203554" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00051 23.9336C4.00051 21.8034 5.72741 20.0765 7.85765 20.0765H23.9291C26.0593 20.0765 27.7862 21.8034 27.7862 23.9336C27.7862 26.0638 26.0593 27.7907 23.9291 27.7907H7.85765C5.72741 27.7907 4.00051 26.0638 4.00051 23.9336Z" fill="#203554" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.00051 56.0727C4.00051 53.9424 5.72741 52.2155 7.85765 52.2155H23.9291C26.0593 52.2155 27.7862 53.9424 27.7862 56.0727C27.7862 58.2029 26.0593 59.9298 23.9291 59.9298H7.85765C5.72741 59.9298 4.00051 58.2029 4.00051 56.0727Z" fill="#203554" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M52.216 56.0727C52.216 53.9424 53.9429 52.2155 56.0732 52.2155H72.1446C74.2749 52.2155 76.0018 53.9424 76.0018 56.0727C76.0018 58.2029 74.2749 59.9298 72.1446 59.9298H56.0732C53.9429 59.9298 52.216 58.2029 52.216 56.0727Z" fill="#203554" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M52.216 23.9336C52.216 21.8034 53.9429 20.0765 56.0732 20.0765H72.1446C74.2749 20.0765 76.0018 21.8034 76.0018 23.9336C76.0018 26.0638 74.2749 27.7907 72.1446 27.7907H56.0732C53.9429 27.7907 52.216 26.0638 52.216 23.9336Z" fill="#203554" />
        </svg>
      );
    },
  },
  {
    name: "Complete Performance Reviews by Friday",
    value: 91,
    href: "#",
    icon: function Icon() {
      return (
        <svg width="20" height="20" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" className="mr-2.5 fill-slate-500">
          <path fill="#203554" fill-rule="evenodd" clip-rule="evenodd" d="M13.8602 6.86016C15.6915 5.02883 18.1753 4 20.7652 4H48.6395C49.4899 4 50.3055 4.33783 50.9068 4.93916L68.9432 22.9756C69.5445 23.5769 69.8823 24.3925 69.8823 25.2429V66.2348C69.8823 68.8247 68.8535 71.3085 67.0222 73.1398C65.1909 74.9712 62.7071 76 60.1172 76H20.7652C18.1753 76 15.6915 74.9712 13.8602 73.1398C12.0288 71.3085 11 68.8247 11 66.2348V13.7652C11 11.1753 12.0288 8.69149 13.8602 6.86016ZM20.7652 10.4129C19.8761 10.4129 19.0235 10.7661 18.3948 11.3948C17.7662 12.0234 17.413 12.8761 17.413 13.7652V66.2348C17.413 67.1239 17.7662 67.9766 18.3948 68.6052C19.0235 69.2339 19.8761 69.5871 20.7652 69.5871H60.1172C61.0062 69.5871 61.8589 69.2339 62.4875 68.6052C63.1162 67.9766 63.4694 67.1239 63.4694 66.2348V26.5711L47.3113 10.4129H20.7652Z" />
          <path fill="#203554" fill-rule="evenodd" clip-rule="evenodd" d="M46.9995 4C48.7704 4 50.206 5.43558 50.206 7.20647V23.6761H66.6755C68.4464 23.6761 69.882 25.1117 69.882 26.8826C69.882 28.6535 68.4464 30.0891 66.6755 30.0891H46.9995C45.2286 30.0891 43.7931 28.6535 43.7931 26.8826V7.20647C43.7931 5.43558 45.2286 4 46.9995 4Z" />
        </svg>
      );
    },
  },
];

const views = [
  {
    date: "Mon",
    Views: 35,
  },
  {
    date: "Tue",
    Views: 76,
  },
  {
    date: "Wed",
    Views: 4,
  },
  {
    date: "Thur",
    Views: 4,
  },
  {
    date: "Fri",
    Views: 65,
  },
];

const ugc = [
  {
    date: "Mon",
    Views: 3,
  },
  {
    date: "Tue",
    Views: 9,
  },
  {
    date: "Wed",
    Views: 1,
  },
  {
    date: "Thur",
    Views: 4,
  },
  {
    date: "Fri",
    Views: 0,
  },
];

const barchart = [
  {
    name: "Belfast",
    "Views": 540,
    "Comments": 32,
    "Likes": 56,
  },
  {
    name: "London",
    "Views": 400,
    "Comments": 9,
    "Likes": 18,
  },
  {
    name: "Hong Kong",
    "Views": 320,
    "Comments": 26,
    "Likes": 10,
  },
];

const dataFormatter = (number: number) => `${Intl.NumberFormat("uk").format(number).toString()}%`;

function App() {
  return (
    <div className="App">
      <header className="App-header bg-white p-4 mb-4">
        <div class="container mx-auto flex items-center">
          <img src={logo} className="App-logo mr-24" alt="logo" />
          <p className="text-gray-500 font-medium text-sm mr-8">Home</p>
          <p className="text-gray-500 font-medium text-sm mr-8">Org Settings</p>
          <p className="text-gray-500 font-medium text-sm mr-8 active-nav-item">Insights</p>
          <p className="text-gray-500 font-medium text-sm mr-8">Locker Management</p>
          <p className="text-gray-500 font-medium text-sm mr-8">Planner</p>
        </div>
      </header>

      <div class="container mx-auto">

        <Grid numItemsMd={3} numItemsLg={3} className="gap-6 mt-6">
          <div>
            <Text className='mb-1'>Date Range</Text>
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
          <div>
            <Text className='mb-1'>Workspace</Text>
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
                <Card>
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
                <Card>
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
                <Card>
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
                <Card>
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
                <Card>
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
                <Card>
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
      </div>
    </div>
  );
}

export default App;
