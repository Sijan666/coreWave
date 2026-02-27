import React from 'react'
import Container from '../Container'
import Reviewcard from '../Reviewcard'
import { reviews } from '../../data/api'


const Review = () => {
    return (
        <>
        <section id='review'>
            <div className="py-25">
                <Container>
                    <h3 className='text-center text-[45px] font-semibold text-[#1B1B1B] pb-12'>What our clients saying</h3>
                    <div className="flex justify-center gap-x-6">
                        {reviews.map((item)=>(
                            <div key={item.id}>
                                <Reviewcard className={''}
                                    client={item.client}
                                    reviewTitle={item.reviewTitle}
                                    desc={item.desc}
                                    reviewerName={item.reviewerName}
                                    sellerType={item.sellerType}
                                />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Review