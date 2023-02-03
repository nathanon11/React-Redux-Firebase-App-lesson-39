import React from 'react'
import { useState, useEffect, } from "react"

// import { connect } from 'react-redux'
// Your code that uses the About variable


import { Redirect } from 'react-router-dom'                                                                                           
import {getDownloadURL, ref } from 'src/config/fbConfig.js'
// import { AboutSection } from '../../config/fbConfig'

function AboutPage() {
  const [imageUrls, setImageUrls] = useState([]);
    const imagesListRef = ref(AboutPage, "after/");
  
    useEffect(() => {
     let list = (imagesListRef).then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      });
    }, []);
  return (
   <div>
      <link href="./assets/main/main.3f6952e4.css" rel="stylesheet"></link>  
  <div id="site-border-left" />
  <div id="site-border-right" />
  <div id="site-border-top" />
  <div id="site-border-bottom" />
  {/* Add your content of header */}
  {/* <header>
    <nav className="navbar  navbar-fixed-top navbar-default">
      <div className="container">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav ">
            <li>
              <a href="./works.js" title="">
                {" "}
                กลับหน้าหลัก
              </a>
            </li>
            <li>
            </li>
          </ul>
          <ul className="nav navbar-nav ">
            <li>
              <a href="./Summary" title="">
                {" "}
                รายงานผลการประเมิน
              </a>
            </li>
            <li>
            </li>
          </ul>
          <ul className="nav navbar-nav ">
            <li>
              <a href="./" title="">
                {" "}
                ออกจากระบบ</a>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header> */}
  <div className="section-container">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="section-container-spacer text-center">
            
            <h1 className="h2" style={{ color: "rgba(15,126,123,1)" }}>Information</h1>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-xs-12 col-md-6">
                  <h3 style={{ color: "rgba(15,126,123,1)" }}>ข้อมูลผู้ป่วย</h3>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    <br />
                    เลขที่บัตรประชาชน :{" "}
                  </span> 
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    15099 88678 98 4
                  </span>
                  <br />
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    ชื่อ :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    พงศ์พล{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    นามสกุล :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    บุญศิริ{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    อายุ :
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    {" "}
                    27
                  </span>
                  <br />
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    HN :
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    16788456
                  </span>
                  <br />
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    วัน/เดือน/ปี เกิด :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    09 กันยายน 2538
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    {" "}
                    <br />
                    ศาสนา :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    พุทธ{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    เชื้อชาติ :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    ไทย{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    สัญชาติ :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    {" "}
                    ไทย
                  </span>
                  <br />
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    เพศ :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    ชาย
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    {" "}
                    อาชีพ :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    รับจ้างทั่วไป{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  >
                    สถานภาพ : <br />
                    หมู่เลือด :{" "}
                  </span>
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      color: "rgba(15,126,123,1)"
                    }}
                  >
                    AB
                  </span>
                  <br />
                  <span
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16
                    }}
                  />
                  <br />
                  <h3 style={{ color: "rgba(15,126,123,1)" }}>
                    อาการเบื้องต้น
                  </h3>
                  <textarea id="freeform" name="freeform" rows="4" cols="50" ></textarea><br/>
                  
                  <p style={{ color: "red" }}>
                    **ดูข้อมูลจากห้องปฏิบัติการคลิกที่ รายงานผลการประเมิน**
                  </p>
                </div>
                
                <div className="col-xs-12 col-md-6">
                <span
              style={{
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 16,
                color: "red",
                marginLeft: 60
              }}
            >
              จำนวนผลึกแคลเซียมออกซาเลตที่ตรวจพบ 238 ผลึก{" "}
            </span>
            
            {imageUrls.map((url) => {
             return <img src={url} width={300}
             className="img-responsive"
             alt=""
             style={{ float: "left", marginLeft: 60 ,  }}/>;
               })}<br></br>
                  
                    
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Google Analytics: change UA-XXXXX-X to be your site's ID 



*/}
</div>
  )
}

export default AboutPage
