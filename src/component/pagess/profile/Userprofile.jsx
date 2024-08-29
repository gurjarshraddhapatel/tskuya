
const Userprofile = () => {

  return (
    <>
      <div className="container-fluid d-flex">
        {/* starting nav section of instagram */}
        <nav>
          <div className="navbar  usernavbar text-start">
            <div className="instagram-text-logo">
              <h1 className="h1 display-6 userprofile-heading">
                の名前 ウェブサイド
              </h1>
            </div>
            <div className="sub-section " id="clicked">
              <i className="fa-solid fa-house " />
              <a href="/">Home</a>
            </div>
            <div className="sub-section">
              <i className="fa-solid fa-magnifying-glass" />
              <a href="#">Search</a>
            </div>
            <div className="sub-section">
              <i className="fa-regular fa-compass" />
              <a href="#">Explore</a>
            </div>
            <div className="sub-section text-start  ">
              <i className="fa-solid fa-clapperboard" />
              <a href="#">Reels</a>
            </div>

            <div className="sub-section" id="hidden1">
              <i className="fa-solid fa-square-plus" />
              <a href="#">Create</a>
            </div>
            <div className="sub-section">
              <i className="fa-regular fa-message" />
              <a href="/chat">Messages</a>
            </div>
            <div className="sub-section" id="hidden2">
              <i className="fa-regular fa-heart" />
              <a href="#">Notification</a>
            </div>
            {/* <div className="sub-section">
              <div className="profile-img">
                <img src="https://i.postimg.cc/zB3mRnhs/apy-logo.png" alt="" />
              </div>
              <a href="#">Profile</a>
              
            </div> */}
            <div className="menu-section " id="hidden">
              <i className="fa-solid fa-bars" />
              <a href="#">More</a>
            </div>
          </div>
        </nav>

        <div className="middle-section">
          <div className="post-section">
            <div className="nav-hidden">
              <div className="nav-hidden-logo" id="white-2color">
                <h1 className="h1 display-6 userprofile-heading">
                  ウェブサイトの名前
                </h1>
              </div>
              <div className="nav-hide-2">
                <i className="fa-regular fa-heart" />
                <i className="fa-regular fa-paper-plane" />
              </div>
            </div>
            <div className="story-section">
              <div className="story">
                <div className="story-image">
                  <img src="/img/girls/girl4.png" alt="" />
                </div>
                <span>アーラディア_gu</span>
              </div>
              <div className="story">
                <div className="story-image">
                  <img src="/img/girls/girl5.png" alt="" />
                </div>
                <span>アダー_paret..</span>
              </div>
              <div className="story" id="story-2">
                <div className="story-image">
                  <img src="/img/girls/girl6.png" alt="" />
                </div>
                <span>アディラ_boi..</span>
              </div>
              <div className="story" id="story-3">
                <div className="story-image">
                  <img src="/img/girls/girl7.png" alt="" />
                </div>
                <span>アニカ@189</span>
              </div>
              <div className="story" id="story-4">
                <div className="story-image">
                  <img src="/img/girls/girl8.png" alt="" />
                </div>
                <span>カシュビ_tut</span>
              </div>
              <div className="story" id="story-5">
                <div className="story-image">
                  <img src="/img/girls/girl9.png" alt="" />
                </div>
                <span>レベッカ.io</span>
              </div>
              <div className="story" id="story-6">
                <div className="story-image">
                  <img src="/img/girl1.png" alt="" />
                </div>
                <span>サハナ_pie.</span>
              </div>
              <div className="story" id="story-7">
                <div className="story-image">
                  <img src="/img/girl2.png" alt="" />
                </div>
                <span>ザラ_comp</span>
              </div>
            </div>
            <div className="post-area">
              <div className="post-main">
                <div className="post-header">
                  <div className="post-left-header">
                    <div className="post-image">
                      <img src="/img/girls/girl4.png" alt="" />
                    </div>
                    <p className="post-username">ヴィン・ディーゼル</p>
                    <i className="fa-solid fa-certificate" />
                    <span className="one-day"> . 1時間前 </span>
                  </div>
                  <i className="fa-solid fa-grip-lines" />
                </div>
                <div className="post-main-image">
                  <img src="/img/girl2.png" alt="" />
                </div>
                <div className="post-fotter">
                  <div className="post-fotter-left">
                    <i className="fa-regular fa-heart" />
                    <i className="fa-regular fa-message" />
                    <i className="fa-regular fa-paper-plane" />
                  </div>
                  <i className="fa-regular fa-bookmark" />
                </div>
                <div className="post-description">
                  <p className="post-liked">〜他の人がいいねしました</p>
                  <p className="title">
                    <span>バルコー </span>
                    今年のヒマーチャル・プラデーシュでは、モンスーンの激しい雨がいくつかの地域に大きな被害をもたらし、死亡者数が260人を超えました。
                    <br /> 続きを読む
                  </p>
                  <p className="comments"> 全コメントを見る</p>
                </div>
              </div>
              <div className="post-main">
                <div className="post-header">
                  <div className="post-left-header">
                    <div className="post-image">
                      <img src="/img/girl3.jpeg" alt="" />
                    </div>
                    <p className="post-username">マイリー・サイラス</p>
                    <i className="fa-solid fa-certificate" />
                    <span className="one-day"> . 1日前 </span>
                  </div>
                  <i className="fa-solid fa-grip-lines" />
                </div>
                <div className="post-main-image">
                  <img src="/img/girl3.jpeg" alt="" />
                </div>
                <div className="post-fotter">
                  <div className="post-fotter-left">
                    <i className="fa-regular fa-heart" />
                    <i className="fa-regular fa-message" />
                    <i className="fa-regular fa-paper-plane" />
                  </div>
                  <i className="fa-regular fa-bookmark" />
                </div>
                <div className="post-description">
                  <p className="post-liked">〜他の人がいいねしました</p>
                  <p className="title">
                    <span>ジェイミー・フォックス </span>
                    月曜日に、内閣は女性予約法案を承認し、女性のために33％の予約を提供しました。
                    <br /> 続きを読む
                  </p>
                  <p className="comments"> 全コメントを見る</p>
                </div>
              </div>
              <div className="post-main">
                <div className="post-header">
                  <div className="post-left-header">
                    <div className="post-image">
                      <img src="/img/girls/girl5.png" alt="" />
                    </div>
                    <p className="post-username">ケイティ・ペリー</p>
                    <i className="fa-solid fa-certificate" />
                    <span className="one-day"> . 5時間前 </span>
                  </div>
                  <i className="fa-solid fa-grip-lines" />
                </div>
                <div className="post-main-image">
                  <img src="/img/girls/girl5.png" alt="" />
                </div>
                <div className="post-fotter">
                  <div className="post-fotter-left">
                    <i className="fa-regular fa-heart" />
                    <i className="fa-regular fa-message" />
                    <i className="fa-regular fa-paper-plane" />
                  </div>
                  <i className="fa-regular fa-bookmark" />
                </div>
                <div className="post-description">
                  <p className="post-liked">〜他の人がいいねしました</p>
                  <p className="title">
                    <span>ジョン・レジェンド </span>
                    パル・ヤード・アインゲ・ウォー・パル!
                    <br /> 続きを読む
                  </p>
                  <p className="comments"> 全コメントを見る</p>
                </div>
              </div>
              <div className="post-main">
                <div className="post-header">
                  <div className="post-left-header">
                    <div className="post-image">
                      <img src="/img/girls/girl6.png" alt="" />
                    </div>
                    <p className="post-username">レディー・ガガ</p>
                    <i className="fa-solid fa-certificate" />
                    <span className="one-day"> . 5日前 </span>
                  </div>
                  <i className="fa-solid fa-grip-lines" />
                </div>
                <div className="post-main-image">
                  <img src="/img/girls/girl7.png" alt="" />
                </div>
                <div className="post-fotter">
                  <div className="post-fotter-left">
                    <i className="fa-regular fa-heart" />
                    <i className="fa-regular fa-message" />
                    <i className="fa-regular fa-paper-plane" />
                  </div>
                  <i className="fa-regular fa-bookmark" />
                </div>
                <div className="post-description">
                  <p className="post-liked">〜他の人がいいねしました</p>
                  <p className="title">
                    <span>カーディ・B </span>
                    今年のヒマーチャル・プラデーシュでは、モンスーンの激しい雨がいくつかの地域に大きな被害をもたらし、死亡者数が260人を超えました。
                    <br /> 続きを読む
                  </p>
                  <p className="comments"> 全コメントを見る</p>
                </div>
              </div>
            </div>
          </div>

          <div className="follow-section">
            <div className="profile-follow profile-foolow-hovering">
              <div className="profile-follow-left">
                <div className="profile-follow-image">
                  <img src="/img/girl2.png" alt="" />
                </div>
                <div className="profile-follow-content">
                  <p className="profile-id">Aasu_Yadav_59</p>
                  <p className="userprofile-name">アース・ヤダヴ</p>
                </div>
              </div>
              <a href="#" className="follow">
                切り替え
              </a>
            </div>
            <div className="suggestion-follow">
              <p className="suggestion">おすすめのユーザー</p>
              <a href="#" className="see-all">
                すべて表示
              </a>
            </div>
            <div className="profile-follow profile-foolow-hovering">
              <div className="profile-follow-left">
                <div className="profile-follow-image">
                  <img
                    src="https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.webp?b=1&s=612x612&w=0&k=20&c=VsTsa0kjyZ7ALe-nyKAUfynyRxZo8H4LRMdu_ecPuOY="
                    alt=""
                  />
                </div>
                <div className="profile-follow-content">
                  <p className="profile-id">rohit_@135</p>
                  <p className="userprofile-name">
                    shiv_s177 がフォローしています
                  </p>
                </div>
              </div>
              <a href="#" className="follow">
                follow
              </a>
            </div>
            <div className="profile-follow profile-foolow-hovering">
              <div className="profile-follow-left">
                <div className="profile-follow-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/09/08/15/16/cute-7441224_640.jpg"
                    alt=""
                  />
                </div>
                <div className="profile-follow-content">
                  <p className="profile-id">ubey_lih</p>
                  <p className="userprofile-name">
                    shriiiiii_89_ + 他2人 がフォローしています
                  </p>
                </div>
              </div>
              <a href="#" className="follow">
                follow
              </a>
            </div>
            <div className="profile-follow profile-foolow-hovering">
              <div className="profile-follow-left">
                <div className="profile-follow-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2020/08/02/18/08/woman-5458225_640.png"
                    alt=""
                  />
                </div>
                <div className="profile-follow-content">
                  <p className="profile-id">limsean_awersom</p>
                  <p className="userprofile-name">
                    ajeetyadav8242 + 他.... がフォローしています
                  </p>
                </div>
              </div>
              <a href="#" className="follow">
                follow
              </a>
            </div>
            <div className="profile-follow profile-foolow-hovering">
              <div className="profile-follow-left">
                <div className="profile-follow-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_640.jpg"
                    alt=""
                  />
                </div>
                <div className="profile-follow-content">
                  <p className="profile-id">rootpies567t</p>
                  <p className="userprofile-name">
                    ravish_thakur31 がフォローしています
                  </p>
                </div>
              </div>
              <a href="#" className="follow">
                follow
              </a>
            </div>
            <div className="profile-follow profile-foolow-hovering">
              <div className="profile-follow-left">
                <div className="profile-follow-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2019/11/01/06/11/profile-4593404_640.jpg"
                    alt=""
                  />
                </div>
                <div className="profile-follow-content">
                  <p className="profile-id">michal_kuu</p>
                  <p className="userprofile-name">Instagram に新規登録</p>
                </div>
              </div>
              <a href="#" className="follow">
                follow
              </a>
            </div>
            <div className="profile-follow profile-foolow-hovering">
              <div className="profile-follow-left">
                <div className="profile-follow-image">
                  <img
                    src="https://cdn.pixabay.com/photo/2021/07/19/04/36/woman-6477171_640.jpg"
                    alt=""
                  />
                </div>
                <div className="profile-follow-content">
                  <p className="profile-id">rootpies567t</p>
                  <p className="userprofile-name">
                    ravish_thakur31 がフォローしています
                  </p>
                </div>
              </div>
              <a href="#" className="follow">
                follow
              </a>
            </div>
          </div>





        
        </div>
      </div>
    </>
  );
};

export default Userprofile;
