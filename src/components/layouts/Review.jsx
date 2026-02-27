import React from 'react'
import Container from '../Container'
import Reviewcard from '../Reviewcard'
import r1 from '../../assets/r1.png'
import r2 from '../../assets/r2.png'
import r3 from '../../assets/r3.png'

const Review = () => {
    return (
        <>
        <section id='review'>
            <div className="py-25">
                <Container>
                    <h3 className='text-center text-[45px] font-semibold text-[#1B1B1B] pb-12'>What our clients saying</h3>
                    <div className="flex justify-center gap-x-6">
                        <div className="w-1/3">
                            <Reviewcard className={''}
                                client={r1}
                                reviewTitle={'Excellent Team!'}
                                desc={'The customer service team at this company was very responsive and helpful when I had questions about their products.'}
                                reviewerName={'Farhan Rio'}
                                sellerType={'Happy Seller'}
                            />
                        </div>
                        <div className="w-1/3">
                            <Reviewcard className={''}
                                client={r2}
                                reviewTitle={'Greate Service'}
                                desc={'The customer service team at this company was very responsive and helpful when I had questions about their products.'}
                                reviewerName={'Alizabeth Nancy'}
                                sellerType={'Happy Seller'}
                            />
                        </div>
                        <div className="w-1/3">
                            <Reviewcard className={''}
                                client={r3}
                                reviewTitle={'The Best Agency!'}
                                desc={'The customer service team at this company was very responsive and helpful when I had questions about their products.'}
                                reviewerName={'Jenny Wilson'}
                                sellerType={'Happy Seller'}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        </>
    )
}

export default Review