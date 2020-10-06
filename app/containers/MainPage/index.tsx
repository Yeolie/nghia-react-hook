import React from 'react'
import './index.scss'

interface MainPageProps{}

export const MainPage:React.FC<MainPageProps>=(props)=>{
    return (
        <div className="container">
            <div className="grid">
                <div className="grid__row">
                    <div className="grid__column-2">
                        <nav className="category">
                            <h3 className="category__heading">
                                <i className="fas fa-list"></i>
                                Danh mục sp
                            </h3>
                            <ul className="category-list">
                                <li className="category-item">
                                    <a href="" className="category-item-link">Điện thoại</a>
                                </li>
                                <li className="category-item">
                                    <a href="" className="category-item-link">Laptop</a>
                                </li>
                                <li className="category-item">
                                    <a href="" className="category-item-link">Tablet</a>
                                </li>
                                <li className="category-item">
                                    <a href="" className="category-item-link">Phụ kiện</a>
                                </li>
                                <li className="category-item">
                                    <a href="" className="category-item-link">Đồng hồ thời trang</a>
                                </li>
                                <li className="category-item">
                                    <a href="" className="category-item-link">Đồng hồ thông minh</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="grid__column-10">
                        <div className="home-filter">
                            <span className="home-filter__label">Lọc theo</span>
                            <button className="home-filter__btn btn">Dưới 2 triệu</button>
                            <button className="home-filter__btn btn">Từ 2 đến 4 triệu</button>
                            <button className="home-filter__btn btn">Mới nhất</button>
                            <button className="home-filter__btn btn">Bán chạy</button>
                            <div className="home-filter__page">
                                <span className="home-filter__page-number">
                                    Đang ở trang 
                                    <span className="home-filter__page-current">1
                                    </span>
                                    /4
                                </span>

                                <div className="home-filter__page-control">
                                    <a href="" className="home-filter__page-btn">
                                        <i className="home-filter__page-icon fas fa-angle-left"></i>
                                    </a>
                                    <a href="" className="home-filter__page-btn">
                                        <i className="home-filter__page-icon fas fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="home-products">
                            <div className="grid__row">
                                <div className="grid__column-10-4">
                                    <div className="home-product-item">
                                        <div className="home-product-item__img">
                                            <img src="./images/note10.jpg" alt=""/>chèn ảnh vô
                                        </div>
                                        <h3 className="home-product-item__name">
                                            Samsung Galaxy Z Fold 2 5G. Samsung Galaxy Z Fold2 5G Samsung Galaxy Z Fold2 5G
                                        </h3>
                                        <div className="home-product-item__price">
                                            <div className="home-product-item__price--old">50.000.000đ</div>
                                            <div className="home-product-item__price--new">49.999.999đ</div>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__like">
                                                <i className="far fa-heart"></i>
                                            </div>
                                            <div className="home-product-item__rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <button className="btn home-product-item__buying">Mua ngay</button>
                                    </div>                                           
                                </div>
                                <div className="grid__column-10-4">
                                    <div className="home-product-item">
                                        <div className="home-product-item__img">
                                            <img src="./images/note10.jpg" alt=""/>
                                        </div>
                                        <h3 className="home-product-item__name">
                                            Samsung Galaxy Z Fold 2 5G. Samsung Galaxy Z Fold2 5G Samsung Galaxy Z Fold2 5G
                                        </h3>
                                        <div className="home-product-item__price">
                                            <div className="home-product-item__price--old">50.000.000đ</div>
                                            <div className="home-product-item__price--new">49.999.999đ</div>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__like">
                                                <i className="far fa-heart"></i>
                                            </div>
                                            <div className="home-product-item__rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <button className="btn home-product-item__buying">Mua ngay</button>
                                    </div>                                           
                                </div>
                                <div className="grid__column-10-4">
                                    <div className="home-product-item">
                                        <div className="home-product-item__img">
                                            <img src="./images/note10.jpg" alt=""/>
                                        </div>
                                        <h3 className="home-product-item__name">
                                            Samsung Galaxy Z Fold 2 5G. Samsung Galaxy Z Fold2 5G Samsung Galaxy Z Fold2 5G
                                        </h3>
                                        <div className="home-product-item__price">
                                            <div className="home-product-item__price--old">50.000.000đ</div>
                                            <div className="home-product-item__price--new">49.999.999đ</div>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__like">
                                                <i className="far fa-heart"></i>
                                            </div>
                                            <div className="home-product-item__rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <button className="btn home-product-item__buying">Mua ngay</button>
                                    </div>                                           
                                </div>
                                <div className="grid__column-10-4">
                                    <div className="home-product-item">
                                        <div className="home-product-item__img">
                                            <img src="./images/note10.jpg" alt=""/>
                                        </div>
                                        <h3 className="home-product-item__name">
                                            Samsung Galaxy Z Fold 2 5G. Samsung Galaxy Z Fold2 5G Samsung Galaxy Z Fold2 5G
                                        </h3>
                                        <div className="home-product-item__price">
                                            <div className="home-product-item__price--old">50.000.000đ</div>
                                            <div className="home-product-item__price--new">49.999.999đ</div>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__like">
                                                <i className="far fa-heart"></i>
                                            </div>
                                            <div className="home-product-item__rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <button className="btn home-product-item__buying">Mua ngay</button>
                                    </div>                                           
                                </div>
                                <div className="grid__column-10-4">
                                    <div className="home-product-item">
                                        <div className="home-product-item__img">
                                            <img src="./images/note10.jpg" alt=""/>
                                        </div>
                                        <h3 className="home-product-item__name">
                                            Samsung Galaxy Z Fold 2 5G. Samsung Galaxy Z Fold2 5G Samsung Galaxy Z Fold2 5G
                                        </h3>
                                        <div className="home-product-item__price">
                                            <div className="home-product-item__price--old">50.000.000đ</div>
                                            <div className="home-product-item__price--new">49.999.999đ</div>
                                        </div>
                                        <div className="home-product-item__action">
                                            <div className="home-product-item__like">
                                                <i className="far fa-heart"></i>
                                            </div>
                                            <div className="home-product-item__rating">
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                        </div>
                                        <button className="btn home-product-item__buying">Mua ngay</button>
                                    </div>                                           
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}