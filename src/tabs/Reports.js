import {
    Card, Text, Bold, Grid, Button
} from "@tremor/react";
import { DownloadIcon } from 'lucide-react';

export default function Reports() {

    return (
        <>
            <Grid numItemsMd={2} numItemsLg={4} className="gap-6 mt-4  border-b pb-4">
                <Card className='flex flex-col justify-between'>
                    <Text><Bold>User List</Bold></Text>
                    <Button
                        icon={DownloadIcon}
                        size="sm"
                        className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                    >
                        Download
                    </Button>
                </Card>
                <Card className='flex flex-col justify-between'>
                    <Text><Bold>Active Users Reports</Bold></Text>
                    <Button
                        icon={DownloadIcon}
                        size="sm"
                        className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                    >
                        Download
                    </Button>
                </Card>
                <Card className='flex flex-col justify-between'>
                    <Text><Bold>User Publishing Report</Bold></Text>
                    <Button
                        icon={DownloadIcon}
                        size="sm"
                        className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                    >
                        Download
                    </Button>
                </Card>
                <Card className='flex flex-col justify-between'>
                    <Text><Bold>User Recognition Report</Bold></Text>
                    <Button
                        icon={DownloadIcon}
                        size="sm"
                        className="mt-4 w-full bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300"
                    >
                        Download
                    </Button>
                </Card>
            </Grid>
        </>
    )
}