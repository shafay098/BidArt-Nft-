import React, { useState } from 'react'
import CollectionDetailData from '../BannerPortfolio/CollectionDetailData.json'
import UserHistoryModal from '../../homecomp/newitemssection/UserHistoryModal';
import UserPlaceBidModal from '../../homecomp/newitemssection/UserPlaceBidModal';
import UserItemCard from '../../homecomp/newitemssection/UserItemCard';

const BannerCardFrame = () => {

    const CollectionData = CollectionDetailData.BannerPorfolioDetailBody.Cards
    console.log(CollectionData);

    const [historyModalShow, setHistoryModalShow] = useState(false);
    const [placeBidModalShow, setPlaceBidModalShow] = useState(false);
    const handleHistoryModal = () => {
        setHistoryModalShow(!historyModalShow);
        const bodyScroll = document.getElementsByTagName("body")[0];
        bodyScroll.style.overflowY =
            historyModalShow === false ? "hidden" : "scroll";
    };
    const handlePlaceBidModal = () => {
        setPlaceBidModalShow(!placeBidModalShow);
        const bodyScroll = document.getElementsByTagName("body")[0];
        bodyScroll.style.overflowY =
            placeBidModalShow === false ? "hidden" : "scroll";
    };

    const [tooglebtn, settogglebtn] = useState({
        Category: true,
        Status: true,
        Price: true,
        Collection: true
    })

    const CateforListLoop = ['Art', 'Fashion', 'Music', 'Video', 'Games', 'Sports', 'Collections']
    const StatusListLoop = ['Buy Now', 'In Auction', 'Looking to Sell', 'Has Offers']
    const CollectionListLoop = ['Audioglyphs', 'Autoglyphs', 'CryptoCrystal', 'CryptoArte', 'CyberKongz']





    return (
        <div className='Container Collection-Detail-Banner-Portfolio-section2 d-flex gap-3 px-3'>


            <div className='LeftFrame h-100 border border-primary bg-linear-gradient rounded-4 '>
                <div className='Control-Container' >
                    <div className='d-flex justify-content-center left-frame-border px-3 py-3'>
                        <div class="search-container w-100 rounded-5">
                            <input class="form-control me-2 rounded-5 bg-transparent text-white" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    </div>


                    <div className='Control-Collapse d-flex flex-column'>

                        <div className='Category-Collapse'>

                            <div className='left-frame-border px-3 py-3'>

                                <button class="btn btn-primary bg-transparent w-100 d-flex justify-content-between border-0" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseCategory" aria-expanded="false" aria-controls="CollapseCategory" onClick={() => {
                                    settogglebtn((data) => {
                                        return {
                                            ...data,
                                            Category: !data.Category
                                        }
                                    });
                                }}>
                                    Category

                                    {tooglebtn.Category ? (
                                        <span><svg xmlns="http://www.w3.org/2000/svg" wi dth="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                        </svg></span>

                                    ) : (
                                        <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                        </svg></span>

                                    )}
                                </button>

                                <div class="collapse" id="CollapseCategory">

                                    <ul className='p-3'>

                                        {

                                            CateforListLoop.map((label, index) => {
                                                return (
                                                    <li className='py-1' key={index}>
                                                        <div class="form-check text-white">
                                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                            <label class="form-check-label" for="flexRadioDefault1">
                                                                {label}
                                                            </label>
                                                        </div>
                                                    </li>
                                                )
                                            })


                                        }
                                    </ul>



                                </div>
                            </div>

                        </div>



                        <div className='left-frame-border px-3 py-3'>
                            <button class="btn btn-primary bg-transparent w-100 d-flex justify-content-between border-0" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseStaus" aria-expanded="false" aria-controls="CollapseStaus" onClick={() => {
                                settogglebtn((data) => {
                                    return {
                                        ...data,
                                        Status: !data.Status
                                    }
                                })
                            }}>
                                Status

                                {tooglebtn.Status ? (
                                    <span><svg xmlns="http://www.w3.org/2000/svg" wi dth="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg></span>

                                ) : (
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg></span>

                                )}
                            </button>
                            <div class="collapse" id="CollapseStaus">
                                <ul className='p-3'>
                                    {
                                        StatusListLoop.map((label, index) => {
                                            return (
                                                <li className='py-1' key={index}>
                                                    <div className="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label class="form-check-label text-white" for="flexCheckDefault">
                                                            {label}
                                                        </label>
                                                    </div>

                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>


                        <div className='left-frame-border px-3 py-3'>
                            <button class="btn btn-primary bg-transparent w-100 d-flex justify-content-between border-0" type="button" data-bs-toggle="collapse" data-bs-target="#CollapsePrice" aria-expanded="false" aria-controls="CollapsePrice" onClick={() => {
                                settogglebtn((data) => {
                                    return {
                                        ...data,
                                        Price: !data.Price
                                    }
                                })
                            }}>
                                Price
                                {tooglebtn.Price ? (
                                    <span><svg xmlns="http://www.w3.org/2000/svg" wi dth="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg></span>

                                ) : (
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg></span>

                                )}
                            </button>
                            <div class="collapse w-100 border-0" id="CollapsePrice">
                                <div class="bg-transparent border-0">
                                    <div class=" mt-4 dropdown bg-dark-gradient rounded-5 ">
                                        <select class="form-select bg-transparent text-white rounded-5 border-0" placeholder='BTC' aria-label="Default select example">
                                            <option className='text-white bg-dark-gradient' value="1">BTC</option>
                                            <option className='text-white bg-dark-gradient' value="2">BTC</option>
                                            <option className='text-white bg-dark-gradient' value="3">ETH</option>
                                            <option className='text-white bg-dark-gradient' value="3">ADA</option>

                                        </select>


                                    </div>

                                    <div className='d-flex flex-row mt-3 gap-4 '>
                                        <input type="email" class="form-control bg-dark-gradient rounded-5 text-white" id="exampleFormControlInput1" placeholder="Min">
                                        </input>

                                        <input type="email" class="form-control bg-dark-gradient rounded-5 text-white" id="exampleFormControlInput1" placeholder='Max' >
                                        </input>
                                    </div>

                                    <div className='d-flex gap-4 mt-3'>
                                        <button type="button" class="btn btn-primary w-50 rounded-5 bg-dark-gradient">Clear</button>
                                        <button type="button" class="btn btn-primary w-50 rounded-5 bg-dark-gradient">Submit</button>
                                    </div>


                                </div>
                            </div>
                        </div>



                        <div className='left-frame-border px-3 py-3'>
                            <button class="btn btn-primary bg-transparent w-100 d-flex justify-content-between border-0" type="button" data-bs-toggle="collapse" data-bs-target="#CollapseCollection" aria-expanded="false" aria-controls="CollapseCollection" onClick={() => {
                                settogglebtn((data) => {
                                    return {
                                        ...data,
                                        Collection: !data.Collection
                                    }
                                })
                            }}>
                                Collection
                                {tooglebtn.Collection ? (
                                    <span><svg xmlns="http://www.w3.org/2000/svg" wi dth="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                                    </svg></span>

                                ) : (
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg></span>

                                )}
                            </button>
                            <div class="collapse" id="CollapseCollection">
                                <ul className='p-3'>

                                    {

                                        CollectionListLoop.map((label, index) => {
                                            return (
                                                <li className='py-1' key={index}>
                                                    <div class="form-check text-white">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                        <label class="form-check-label" for="flexRadioDefault1">
                                                            {label}
                                                        </label>
                                                    </div>
                                                </li>
                                            )
                                        })


                                    }
                                </ul>
                            </div>
                        </div>





                    </div>


                </div>
            </div>

            <div className='RightFrame w-100'>

                <div className='d-flex flex-column gap-4'>

                    <div className='HeaderSection d-flex flex-row gap-3 justify-content-between h-100 p-2 w-100 bg-linear-gradient rounded-3 flex-xxl-row flex-xl-column flex-lg-column flex-md-column flex-sm-column flex-column align-items-center'>


                        <div className='header-section-section1 d-flex  w-30 align-items-center justify-content-between px-2 gap-3'>
                            <p className='mt-3 text-white'>{CollectionDetailData.BannerPorfolioDetailBody.NavbarDetail.Result} <span>Results</span></p>
                            <div class="search-containerrounded-5 w-50">
                                <input class="form-control me-2 rounded-5 bg-transparent text-white h-100 w-100" type="search" placeholder="In Auction" aria-label="Search" />
                            </div>
                            <a className='fontsize-small-forbutton' href="#">Clear All</a>
                        </div>

                        <div className='header-section-section2 d-flex h-100 w-50 justify-content-around align-items-center gap-3 px-2'>

                            <div class="dropdown bg-dark-gradient w-75 rounded-5">
                                <select class="form-select bg-transparent h-100 w-100 text-white rounded-5 border-0 fontsize-small-forbutton" placeholder='BTC' aria-label="Default select example">
                                    <option className='text-white bg-dark-gradient' value="1">Sort By</option>
                                    <option className='text-white bg-dark-gradient' value="2">BTC</option>
                                    <option className='text-white bg-dark-gradient' value="3">ETH</option>
                                    <option className='text-white bg-dark-gradient' value="3">ADA</option>

                                </select>


                            </div>

                            <div class="dropdown bg-dark-gradient  w-75 rounded-5 ">
                                <select class="form-select bg-transparent h-100 w-100  text-white rounded-5 border-0 fontsize-small-forbutton" placeholder='BTC' aria-label="Default select example">
                                    <option className='text-white bg-dark-gradient' value="1">Likes</option>
                                    <option className='text-white bg-dark-gradient' value="2">BTC</option>
                                    <option className='text-white bg-dark-gradient' value="3">ETH</option>
                                    <option className='text-white bg-dark-gradient' value="3">ADA</option>

                                </select>


                            </div>

                        </div>

                    </div>


                    <div className='BodySection h-100 w-100'>
                        <div className="row">
                            <div className="col-12">
                                <div className="user-all-nft-section animate__animated animate__fadeInLeft">
                                    {CollectionDetailData.BannerPorfolioDetailBody.Cards.map((userData) => {
                                        const { id } = userData;
                                        return (
                                            <UserItemCard
                                                key={id}
                                                userData={userData}
                                                handleHistoryModal={handleHistoryModal}
                                                handlePlaceBidModal={handlePlaceBidModal}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                {historyModalShow && (
                                    <UserHistoryModal handleHistoryModal={handleHistoryModal} />
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {placeBidModalShow && (
                                    <UserPlaceBidModal handlePlaceBidModal={handlePlaceBidModal} />
                                )}
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}

export default BannerCardFrame