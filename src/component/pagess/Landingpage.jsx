
import { Link } from "react-router-dom";
import './Navbar.css'

const Landingpage = () => {
  return (

    <>

  

      {/* Navbar end*/}

      {/* About Start */}
      <div
        className="container-fluid overflow-hidden "
       
      >
        <div className="container py-lg-5">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="RotateMoveLeft">
                <div className="d-flex">
                  <div>
                    <img
                      src="img/girl1.png"
                      className="img-fluid girl1"
                      alt=""
                    />
                  </div>
                  <div className="mx-3">
                    <div>
                      <img
                        src="img/girl3.jpeg"
                        className="img-fluid girl2"
                        alt=""
                      />
                    </div>
                    <div className="mt-2">
                      <img
                        src="img/girls/girl9.png"
                        className="img-fluid girl3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* <img src="img/about-1.png" className="img-fluid w-100" alt="" /> */}
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h4 className="mb-1 ">About Us</h4>
              <h1 className="display-5 mb-4">
                パーソナライズされた製品を簡単に始めましょう
              </h1>
              <p className="mb-4">
                顧客がアディピシングのプロセスに注意を払うことは非常に重要です。
                そこで彼は告発者たちを取り上げ、言われたことをさらに追及した。
                苦痛のため、苦痛の義務によって心がかたくなになるにつれて、問題が生じます。
                それらの中には、労働と楽しみも含まれます。
              </p>
              <a
                href="#"
                className="btn nav-btn text-white rounded-pill py-3 px-5"
              >
                もっと詳しく
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}





      {/* Profile Section - Start */}
      <section>
        <div className="container">
          <div className="row g-4 py-5">
            <div className="col-md-3">
              <div className="product-single-card">
                <div className="product-top-area">
                  <div className="product-discount">$55.00</div>
                  <div className="product-img">
                    <div className="first-view">
                      <img
                        src="/img/girls/girl8.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="hover-view">
                      <img
                        src="/img/girl2.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="sideicons">
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-eye" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-heart" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-shuffle" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="product-category">
                    <a href="#">名前を付けて</a>
                  </h6>
                  <h6 className="product-title text-truncate">
                    <a href="#">究極のゲーミングのための Vip ガール</a>
                  </h6>
                  <div className="d-flex align-items-center">
                    <div className="review-star me-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="review-count">(13)</span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center py-2">
                    <div className="old-price">$50.45</div>
                    <div className="new-price">$35.053455555</div>
                  </div>
                  <Link to="/profile">check</Link>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-single-card">
                <div className="product-top-area">
                  <div className="product-discount">10%</div>
                  <div className="product-img">
                    <div className="first-view">
                      <img
                        src="/img/girl1.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="hover-view">
                      <img
                        src="./img/girl1.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="sideicons">
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-eye" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-heart" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-shuffle" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="product-category">
                    <a href="#">名前を付けて</a>
                  </h6>
                  <h6 className="product-title text-truncate">
                    <a href="#">究極のゲーミングのための Vip ガール</a>
                  </h6>
                  <div className="d-flex align-items-center">
                    <div className="review-star me-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="review-count">(13)</span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center py-2">
                    <div className="old-price">$50.45</div>
                    <div className="new-price">$35.053455555</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-single-card">
                <div className="product-top-area">
                  <div className="product-discount">10%</div>
                  <div className="product-img">
                    <div className="first-view">
                      <img
                        src="/img/girl3.jpeg"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="hover-view">
                      <img
                        src="/img/girl3.jpeg"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="sideicons">
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-eye" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-heart" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-shuffle" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="product-category">
                    <a href="#">名前を付けて</a>
                  </h6>
                  <h6 className="product-title text-truncate">
                    <a href="#">究極のゲーミングのための Vip ガール</a>
                  </h6>
                  <div className="d-flex align-items-center">
                    <div className="review-star me-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="review-count">(13)</span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center py-2">
                    <div className="old-price">$50.45</div>
                    <div className="new-price">$35.053455555</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-single-card">
                <div className="product-top-area">
                  <div className="product-discount">10%</div>
                  <div className="product-img">
                    <div className="first-view">
                      <img
                        src="img/girls/girl4.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="hover-view">
                      <img
                        src="img/girls/girl4.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="sideicons">
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-eye" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-heart" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-shuffle" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="product-category">
                    <a href="#">名前を付けて</a>
                  </h6>
                  <h6 className="product-title text-truncate">
                    <a href="#">究極のゲーミングのための Vip ガール</a>
                  </h6>
                  <div className="d-flex align-items-center">
                    <div className="review-star me-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="review-count">(13)</span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center py-2">
                    <div className="old-price">$50.45</div>
                    <div className="new-price">$35.053455555</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-single-card">
                <div className="product-top-area">
                  <div className="product-discount">10%</div>
                  <div className="product-img">
                    <div className="first-view">
                      <img
                        src="img/girls/girl5.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="hover-view">
                      <img
                        src="img/girls/girl5.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="sideicons">
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-eye" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-heart" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-shuffle" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="product-category">
                    <a href="#">名前を付けて</a>
                  </h6>
                  <h6 className="product-title text-truncate">
                    <a href="#">究極のゲーミングのための Vip ガール</a>
                  </h6>
                  <div className="d-flex align-items-center">
                    <div className="review-star me-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="review-count">(13)</span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center py-2">
                    <div className="old-price">$50.45</div>
                    <div className="new-price">$35.053455555</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-single-card">
                <div className="product-top-area">
                  <div className="product-discount">10%</div>
                  <div className="product-img">
                    <div className="first-view">
                      <img
                        src="img/girls/girl6.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="hover-view">
                      <img
                        src="img/girls/girl6.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="sideicons">
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-eye" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-heart" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-shuffle" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="product-category">
                    <a href="#">名前を付けて</a>
                  </h6>
                  <h6 className="product-title text-truncate">
                    <a href="#">究極のゲーミングのための Vip ガール</a>
                  </h6>
                  <div className="d-flex align-items-center">
                    <div className="review-star me-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="review-count">(13)</span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center py-2">
                    <div className="old-price">$50.45</div>
                    <div className="new-price">$35.053455555</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-single-card">
                <div className="product-top-area">
                  <div className="product-discount">10%</div>
                  <div className="product-img">
                    <div className="first-view">
                      <img
                        src="img/girls/girl7.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="hover-view">
                      <img
                        src="img/girls/girl7.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="sideicons">
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-eye" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-heart" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-shuffle" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="product-category">
                    <a href="#">名前を付けて</a>
                  </h6>
                  <h6 className="product-title text-truncate">
                    <a href="#">究極のゲーミングのための Vip ガール</a>
                  </h6>
                  <div className="d-flex align-items-center">
                    <div className="review-star me-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="review-count">(13)</span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center py-2">
                    <div className="old-price">$50.45</div>
                    <div className="new-price">$35.053455555</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="product-single-card">
                <div className="product-top-area">
                  <div className="product-discount">10%</div>
                  <div className="product-img">
                    <div className="first-view">
                      <img
                        src="img/girls/girl9.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="hover-view">
                      <img
                        src="img/girls/girl9.png"
                        alt="logo"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="sideicons">
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-cart-plus" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-eye" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-heart" />
                    </button>
                    <button className="sideicons-btn">
                      <i className="fa-solid fa-shuffle" />
                    </button>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="product-category">
                    <a href="#">名前を付けて</a>
                  </h6>
                  <h6 className="product-title text-truncate">
                    <a href="#">究極のゲーミングのための Vip ガール</a>
                  </h6>
                  <div className="d-flex align-items-center">
                    <div className="review-star me-1">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-regular fa-star-half-stroke" />
                      <i className="fa-regular fa-star" />
                    </div>
                    <span className="review-count">(13)</span>
                  </div>
                  <div className="d-flex flex-wrap align-items-center py-2">
                    <div className="old-price">$50.45</div>
                    <div className="new-price">$35.053455555</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Profile Section - End */}
      {/* Chat */}
      <div className="chat-container py-4 mt-5">
        <div className="container chat-inner-container">
          <div className="row">
            <div className="col-lg-6  chat-content">
              <div>
                <h2> あなたとチャットしましょう </h2>
                <p>
                  痛みを追跡し、アディピシン化する必要があります。彼女自身、最も恵まれています。
                  あるいは、拒絶反応の痛みや苦しみの解決策を提供していない
                  人生の痛みがそれらのものの設計者である、それは真実だから
                  彼らは体のせいで倒れ、さらなる痛みを伴います。誰の楽しみでもない
                  と痛み
                </p>
                <button type="button" className="nav-btn btn text-white px-4" >Lets Chat</button>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="img/mv_pc.png" className="img-fluid chat-img" alt="" />
            </div>

          </div>
        </div>
      </div>
      {/* Chat */}

    </>
  );
};
export default Landingpage;
