import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import ssr from './assets/images/SSR.png'
import kidney from './assets/images/kidney.jpg'
import logo from '../Home/assets/imgs/22.png'

export default function Bighouse() {
  return (
  <div>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
  />
  {/* font awesome 5 free */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
  />
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  />
  {/* Poppins font from Google */}
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./assets/main/app.css" />
  <title>Frontendor | Component</title>f
  {/*Hero ====================================== */}
  <div className="block-44 py-5">
    <div className="container">
      <div className="row px-0 mx-0 justify-content-center align-items-center"></div>
    </div>
    {/* <hr className="block-44__divider" />
    <div className="container">
      <div className="row flex-column flex-md-row px-2 justify-content-center">
        <div className="flex-grow-1">
          <ul className="block-44__extra-links d-flex list-unstyled p-0"></ul>
        </div>
        <p className="block-41__copyrights" />
        <nav className="hero-nav container px-4 px-lg-0 mx-auto">
      <ul className="nav w-100 list-unstyled align-items-center p-0">
        <li className="hero-nav__item">
          {/* <img className="hero-nav__logo" src={ssr} /> */}
      {/* </li> */}
        {/* <li
          id="hero-menu"
          className="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu"
        >
          <ul className="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
            <li className="flex-grow-1">
              <ul className="nav nav--lg-side list-unstyled align-items-center p-0">
                <li className="hero-nav__item">
                  
                </li>
                <div className='right'>
                <li className="hero-nav__item">
                  <a href="#contact-us" className="hero-nav__link">
                    ติดต่อเรา
                  </a>
                </li>
                <li className="hero-nav__item">
                  <a href="./Home" className="hero-nav__link">
                    แพทย์
                  </a>
                </li>
                <li className="hero-nav__item">
                  <a href="#faq" className="hero-nav__link">
                    ห้องปฏิบัติการ
                  </a>
                </li>
                <li className="hero-nav__item">
                  <a href="./Login" className="hero-nav__link">
                    ผู้ป่วย
                  </a>
                </li>
                </div>
              </ul>
            </li>
          </ul> 
           */}
          <button
            onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')"
            className="ft-menu__close-btn animated"
          >
            <svgv 
              className="bi bi-x"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clipRule="evenodd"
              />
            </svgv>
          </button>
        {/* </li> */}
        <li className="d-lg-none flex-grow-1 d-flex flex-row-reverse hero-nav__item">
          <button
            onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')"
            className="text-center px-2"
          >
            <i className="fas fa-bars" />
          </button>
        </li>
      {/* </ul>
    </nav> */}
      </div>
    {/* </div>
  </div>  */}
  <header className="hero container-fluid border-bottom">
    
    <div className="hero__content container mx-auto">
      <div className="row px-0 mx-0 align-items-center">
        <div className="col-lg-6 px-0">
          <h1 className="hero__title mb-3">
            <span className="highlight">USED</span>{" "}
            <span className="highlight" />
          </h1>
          <p className="block__paragraph mb-0">
            ระบบตรวจสอบและประเมินความเสี่ยงการเกิดโรคนิ่วในระบบทางเดินปัสสาวะด้วยปัญญาประดิษฐ์
          </p>
          <p className="hero__paragraph mb-5"></p>
        </div>
        <div className="col-lg-5 mt-5 mt-lg-0 mx-0">
          <div className="hero__img-container">
            <img src={kidney} className="hero__img w-100" />
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* ===================================== */}
 
  {/* ===================================== */}
  {/* ======================================== */}
  <div id="faq" className="block-39 space-between-blocks">
    <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <br></br> 
      <div className="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 className="hero__title mb-3">
          <span className="highlight">ข้อควรระวัง และ คำแนะนำ</span>เพื่อป้องกัน
          <span className="highlight">การเกิดโรคนิ่ว</span>
        </h1>
      </div>
      <div className="row px-2">
        <div className="col-lg-6">
          <div className="content-block">
            <h4 className="content-block__title">
              การรักษาโรคนิ่วโดยวิธีการสลายนิ่ว
            </h4>
            <p className="content-block__paragraph">
              การสลายนิ่ว คือ การรักษาโรคนิ่วโดยการทำให้นิ่วแตกออกเป็นชิ้นเล็กๆ
              โดยพลังงานเสียงที่เกิดจากการสั่นสะเทือนของคลื่นแม่เหล็กไฟฟ้าจากภายนอกร่างกาย
              ซึ่งพลังงานนี้จะผ่านเข้าสู่ร่างกายโดยไม่มีการทำลายเนื้อเยื่อ
              หลังจากที่นิ่วแตกออกเป็นชิ้นเล็กๆแล้ว จะหลุดปนออกมากับปัสสาวะ
              เป็นการรักษาที่ไม่จำเป็นต้องฉีดยาชา ไม่ต้องดมยาสลบใดๆ
              ผู้ป่วยจะรู้สึกตัวตลอดเวลาที่ทำการรักษา
              ไม่มีแผลหรือท่อระบายใดๆออกมานอกร่างกาย
              ผู้ป่วยสามารถกลับไปพักฟื้นที่บ้านได้หลังจากรับการรักษาแล้ว
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content-block">
            <h4 className="content-block__title">
              เป็นนิ่วรักษาอย่างไร? นิ่วรักษาได้หรือไม่?
            </h4>
            <p className="content-block__paragraph">
              นิ่วในไตสามารถรักษาได้ ทั้งนี้ขึ้นอยู่กับขนาดของนิ่ว ชนิดของนิ่ว
              และร่างกายของผู้ป่วย ซึ่งสามารถรักษาได้โดย
              <br />
              1.ดื่มน้ำมากๆ เพื่อช่วยขับก้อนนิ่วออกมาพร้อมปัสสาวะ
              ในกรณีที่นิ่วมีขนาดเล็กกว่า 5 มิลลิเมตร
              <br />
              2.รักษาด้วยวิธีการผ่าตัดเอานิ่วออกมา เช่น การใช้คลื่นเสียงสลายนิ่ว
              การส่องกล้อง การผ่าตัดต่อมไทรอยด์ เป็นต้น
              สำหรับผู้ที่เคยเป็นโรคนิ่วในไตควรปรับเปลี่ยนพฤติกรรมตนเอง
              โดยควรหลีกเลี่ยงอาหารที่มีสารก่อนิ่วสูง อย่ากลั้นปัสสาวะ
              ควรปัสสาวะให้มากกว่า 2.5 ลิตรต่อวัน และเข้ารับการตรวจติดตามโรคทุกๆ
              3 - 6 เดือน เพื่อป้องกันการเกิดนิ่วซ้ำ
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content-block">
            <h4 className="content-block__title">
              สาเหตุของการเกิดนิ่วในทางเดินปัสสาวะมีอะไรบ้าง
            </h4>
            <p className="content-block__paragraph">
              สาเหตุของการที่ทำให้เกิดมีการรวมตัวกันของผลึกของเกลือแร่หรือ
              หินปูนเป็น ก้อนนิ่วยังไม่มีใครทราบแน่นอน แต่จะมีเหตุ
              บางอย่างซึ่งจะช่วยส่งเสริมทำให้เกิดมี นิ่วเกิดขึ้นได้ง่าย เช่น
              ภาวะที่มีการคั่งของน้ำปัสสาวะอยู่ในกระเพาะปัสสาวะ ในผู้ป่วย ชาย
              ซึ่งเป็นโรคต่อมลูกหมากโต
              ปัสสาวะที่ค้างในกระเพาะปัสสาวะก็จะเป็นสาเหตุ
              ให้เกิดมีนิ่วเกิดขึ้นหรือในผู้ป่วยบางประเภท ซึ่งน้ำ
              ปัสสาวะมีความเข้มข้นของเกลือแร่ มาก เช่น ดื่มน้ำน้อยกว่าปกติ
              หรือรับประทานอาหารบางประเภท ซึ่งมีเกลือแร่ขับออก มาทางน้ำ
              ปัสสาวะมาก เช่น พวกเครื่องในสัตว์หรือพวกผักสด หน่อไม้ เป็นต้น
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content-block">
            <h4 className="content-block__title">
              ในทางการแพทย์จะมีวิธีตรวจผู้ป่วยเป็นโรคนิ่วอย่างไรบ้าง
            </h4>
            <p className="content-block__paragraph">
              ผู้ป่วยที่สงสัยว่าเป็นโรคนิ่ว ควรจะมาพบแพทย์ จะได้ทำการซักประวัติ
              ตรวจ ร่างกาย และตรวจน้ำปัสสาวะ
              ซึ่งอาจจะพบว่ามีเม็ดเลือดแดงหรือเม็ดเลือดขาว ในน้ำ ปัสสาวะ
              และอาจต้องส่งผู้ป่วยไปเอกซเรย์บริเวณไตและกระเพาะปัสสาวะ
              ซึ่งจะทำให้ บอกได้ว่าผู้
              ป่วยคนนั้นมีนิ่วในระบบทางเดินน้ำปัสสาวะหรือไม่
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*-------------------------------------------------------*/}
  {/* =================================== */}
  {/* =================================== */}
  <div
    id="contact-us"
    className="block-28 space-between-blocks border-top border-bottom"
  >
    <br></br>
    <br></br>
    <br></br>
    <div className="container">
      <div className="row h-100">
        <div className="col-lg-6 h-100 block-28__content-side">
          <div className="contact-info">
            <h5 className="contact-info__title mb-3">Context Us </h5>
            <p className="contact-info__paragraph mb-5">
            พวกเราทีม USED จากโรงเรียนปรินส์รอยแยลส์วิทยาลัยหวังเป็นอย่างยิ่งว่า ระบบตรวจสอบและประเมินความเสี่ยงการเกิดโรคนิ่วในระบบทางเดินปัสสาวะที่เราได้เริ่ม
              ต้นคิดค้นและพัฒนามา จะมีส่วนช่วยในการลดค่าใช้จ่ายทั้งของตัวผู้ป่วยเอง ของโรงพยาบาล รวมไปถึงของทางภาครัฐ และทางทีมยังหวังเป็นอย่างยิ่งว่าทุกคนทุครัวเรือนทุกฐานะ
              ควรได้รับการักษาอย่างทั่วถึงและเท่าเทียม
            </p>
            <div className="mb-5">
              <h6 className="contact-info__title-2 mb-3">COLLABORATE</h6>
              <p className="d-flex flex-column">
                <span className="contact-info__item mb-2">
                  USED@USED.com
                </span>
                
              </p>
            </div>
            
          </div>
        </div>
        <div className="col-lg-6 h-100 block-28__form-side">
          <form
            onsubmit="submitContactForm(event)"
            className="contact-form text-center"
          >
            <div className="hero__img-container">
              <img src={logo} className="hero__img w-100" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* =================================== */}
  {/* =================================== */}
  <div className="block-44 py-5">
    <div className="container">
      <div className="row px-0 mx-0 justify-content-center align-items-center"></div>
    </div>
    <hr className="block-44__divider" />
    <div className="container">
      <div className="row flex-column flex-md-row px-2 justify-content-center">
        <div className="flex-grow-1">
          <ul className="block-44__extra-links d-flex list-unstyled p-0"></ul>
        </div>
        <p className="block-41__copyrights" />
      </div>
    </div>
  </div>
  {/* =================================== */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
  </div>


  )
} 
