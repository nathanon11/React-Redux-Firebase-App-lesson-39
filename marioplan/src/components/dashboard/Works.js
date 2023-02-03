import React from 'react'
import { Redirect } from "react-router-dom";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import About from './About'
function Works() {
  let Navigate = Redirect();
  return (
    <div>
      <link href="./assets/main/main.3f6952e4.css" rel="stylesheet"></link>  
  <div id="site-border-left" />
  <div id="site-border-right" />
  <div id="site-border-top" />
  <div id="site-border-bottom" />
  {/* Add your content of header */}
  <header>
    <nav className="navbar  navbar-fixed-top navbar-default">
      <div className="container">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-expanded="false"
        >
          <span className="sr-only"></span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav ">
            <li>

            </li>
            <li>
              <a href="./" title="">
                {" "}
                ออกจากระบบ
              </a>
            </li>
            <li>
              
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  </header>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\ntable {\n  font-family: arial, Montserrat;\n font-size: 16px;\n  border-collapse: collapse;\n  width: 100%;\n  border-radius: 5px 5px 0 0;\n}\n\ntd, th {\n  border: 2px solid #dddd;\n  text-align: center;\n  padding: 10px;\n  border-radius: 5px 5px 0 0;\n}\n\ntr:nth-child(even) {\n  background-color: #f3f3f3 ;\n}\n\n    tr[data-href] {\n        cursor : pointer;\n    }\n\n"
    }}
  />
  <div onclick="application.goToTargetView(event)" />
  <br /><br /><br />
  <br />
  
  
  <div className="section-container-spacer text-center">   
        <h1 className="h2" style={{ color: "rgba(15,126,123,1)" }}>DOCTOR</h1>
  </div>
  <table>
    <tbody>
      <tr style={{ backgroundColor: "#32be8f" }}>
        <th>ลำดับ</th>
        <th>วัน/เดือน/ปี</th>
        <th>Hn</th>
        <th>ชื่อ-สกุล</th>
        <th>แพทย์เจ้าของไข้</th>
        <th>ข้อมูลเพิ่มเติม</th>
      </tr>
      
      <tr href="./" title="">
        <td>1</td>
        <td>1/11/2565</td>
        <td>111</td>
        <td>พงศ์พล บุญศิริ</td>
        <td >
          นพ.ไพศาล ณ เชียงใหม่                  
        </td>
        <td>
        <Button active appearance="gprimary" href="./about" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>

        
      </tr>
      
      <tr>
        <td>2</td>
        <td>2/11/2565</td>
        <td>112</td>
        <td>คณุตม์ สอาดอาวุธ</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr> 
        <td>3</td>
        <td>3/11/2565</td>
        <td>113</td>
        <td>จิรทีปต์ นมเย็น</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>4/11/2565</td>
        <td>114</td>
        <td>ณัฐปคัลภ์ ก้อนสมบัติ</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>5/11/2565</td>
        <td>115</td>
        <td>ติณณภพ ตระกูลพัว</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>6/11/2565</td>
        <td>116</td>
        <td>นิพพิชฌน์ ทองปรอน</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>7</td>
        <td>7/11/2565</td>
        <td>117</td>
        <td>ผรัณชัย สุขศรี</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>8</td>
        <td>8/11/2565</td>
        <td>118</td>
        <td>พิทยุตม์ อินทรพล</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>9</td>
        <td>9/11/2565</td>
        <td>119</td>
        <td>ศาตนันท์ ใบโสด</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>10</td>
        <td>10/11/2565</td>
        <td>120</td>
        <td>อนันยช ฐาปนพงษ์ไพบูลย์</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>11</td>
        <td>11/11/2565</td>
        <td>121</td>
        <td>อิงครัต นามพรม</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>12</td>
        <td>12/11/2565</td>
        <td>122</td>
        <td>กานต์พิชชา กันทะมา</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>13</td>
        <td>13/11/2565</td>
        <td>123</td>
        <td>จารุพิชญา หาญสงคราม</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>14</td>
        <td>14/11/2565</td>
        <td>124</td>
        <td>ภิญญาพัชญ์ พิณโนเอก </td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>15</td>
        <td>15/11/2565</td>
        <td>125</td>
        <td>มัญชุพร เวียงทอง</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
      <tr>
        <td>16</td>
        <td>16/11/2565</td>
        <td>126</td>
        <td>ชวกร นาคสมัย</td>
        <td>นพ.ไพศาล ณ เชียงใหม่  </td>
        <td>
        <Button active appearance="gprimary" href="./work.html" title="" style={{maginLeft:"450"}}>
                    More info
            </Button>
        </td>
      </tr>
    </tbody>
  </table>
  {/* Google Analytics: change UA-XXXXX-X to be your site's ID 



*/}
</div>
  )
}

export default Works

