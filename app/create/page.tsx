import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'

function Create() {
  return (
    <Card className='h-[85vh] my-4 py-2 border-0 bg-zinc-900 flex flex-col'>
        <Card className='mx-20 my-4 flex justify-evenly border-0 bg-gray-950'>
            {/* <Card className='m-1 p-2 rounded-md bg-zinc-900'>
                <Button variant={"ghost"}>1</Button>
                <Button variant={"ghost"}>2</Button>
                <Button variant={"ghost"}>3</Button>
                <Button variant={"ghost"}>4</Button>
                <p className='text-xs self-center'>Select Number of images:</p>
            </Card> */}
            <Card className='p-2 flex flex-1 items-center rounded-md bg-gray-950'>
                <Input type='text' placeholder='Enter the prompt here' className='border-0' />
                <Button className='bg-zinc-600 w-min mx-0 p-1' variant={"outline"} > Submit </Button>
            </Card>
        </Card>
        <Card className='w-1/2 my-2 flex grow self-center bg-gray-950'>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
        </Card>
    </Card>
  )
}

export default Create