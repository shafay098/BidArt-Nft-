import React from 'react'
import { Images } from '../../../assets/images'
import CollectionDetailData from './CollectionDetailData.json'

const BannerPorfolioIndex = () => {
    let CollectionDetailImages = Images.CollectionDetailimages
    return (
        <>
            <div className='Container-fluid Collection-Detail-Banner-Portfolio-section1'                  id='PorfolioBannerCollectionDetail'>  
                <div className='BannerImageHeader'>
                    <img className='rounded-4' alt='bannerimg1' src={CollectionDetailImages.HeaderImage} />
                </div>
                <div className='BannerImagePlusDetailContainer '>
                    <div className='BannerImageSmHeader ms-4'>
                        <img alt='bannerimg2' src={CollectionDetailImages.SmHeaderImage} />
                    </div>
                    <div className='d-flex gap-5 me-4 bg-dark-gradient PortolioDetailMainContainer'>
                        <div className='d-flex gap-1  flex-column'>
                            <h2 className='text-white'>{CollectionDetailData.BannerPorfolioDetailHeader.ProfileCollectionDetail.UserName}</h2>
                            <h6 className='text-white'>{CollectionDetailData.BannerPorfolioDetailHeader.ProfileCollectionDetail.CreatedBy} <span style={{ color: 'blue' }}>Created</span></h6>

                            <div className='d-flex gap-1 ' >
                                <button type="button" class="btn btn-primary btn-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star mb-1 mx-1 " viewBox="0 0 16 16">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                    </svg>
                                    Faviourate</button>
                                <button type="button" class="btn btn-primary btn-sm">Primary</button>
                            </div>
                        </div>

                        <div className='d-flex gap-4 w-100 w-xxl-75 w-xl-100 w-lg-100 justify-content-between bg-dark-gradient PortolioDetailSection1Container'>
                            <div className='d-flex flex-column w-25 justify-content-around Border-Right_Liner'>
                                <h6 className='text-white fontsize-small-collection-detail-section'>Collection Of</h6>
                                <p className='text-white'>{CollectionDetailData.BannerPorfolioDetailHeader.ProfileCollectionDetail.CollectionOf}</p>
                            </div>

                            <div className='d-flex flex-column w-25 justify-content-around Border-Right_Liner'>
                                <h6 className='text-white fontsize-small-collection-detail-section'>Owned By</h6>
                                <p className='text-white'>{CollectionDetailData.BannerPorfolioDetailHeader.ProfileCollectionDetail.OwnedBy}</p>
                            </div>

                            <div className='d-flex flex-column w-25 justify-content-around Border-Right_Liner'>
                                <h6 className='text-white fontsize-small-collection-detail-section'>Floor Price</h6>
                                <p className='text-white'>{CollectionDetailData.BannerPorfolioDetailHeader.ProfileCollectionDetail.FloorPrice}</p>
                            </div>

                            <div className='d-flex flex-column w-25 justify-content-around Border-Right_Liner'>
                                <h6 className='text-white fontsize-small-collection-detail-section'>Total Sales</h6>
                                <p className='text-white'>{CollectionDetailData.BannerPorfolioDetailHeader.ProfileCollectionDetail.TotalSales}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerPorfolioIndex