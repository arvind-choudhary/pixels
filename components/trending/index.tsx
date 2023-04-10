import React from 'react'
import Image from 'next/image'
import { Card } from '../card/card'
import { CardBody } from '../card/CardBody'
import { CardFooter } from '../card/cardFooter'
import { trendingData } from './constant.info'

export const TrendingList = ({ trendingItemsList = trendingData }) => {
  return (
    <>
        {
            trendingItemsList.map((trandingItem) => {
                
                return (
                    <Card>
                        <CardBody>
                            <Image 
                                src={}
                                width={200}
                                height={200}
                            />
                        </CardBody>
                        <CardFooter />
                    </Card>
                )
            })
        }
    </>
  )
}
