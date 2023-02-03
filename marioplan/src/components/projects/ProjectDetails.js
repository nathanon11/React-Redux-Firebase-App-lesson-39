import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, reduxReactFirebase } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import ox from '../projects/pic.jpg'

const ProjectDetails = (props) => 
{
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' /> 
  if (project) {
  
   
    return (
      <header className="container section project-details">
        <headerb className="card z-depth-0">
          <div className="card-content">
          <div className='left'>
          <img src={ox} style={{display:'relative' ,width:'500px'}}/>
          <span className="card-title">{project.title}</span>
          <p> Age : {project.age}</p>  
          </div>
          
          <div  className='right'   >
            
            <p style={{fontSize:'150px'}}>89.5%</p> 
            <p>Specificgravity :{project.specificgravity}</p> 
            <p>Ph : {project.ph} </p>
            <p>Osmolarity:{project.osmolarity} </p>
            <p>Conductivity:{project.conductivity} </p>
            <p>Calcium in urine :{project.calcium} </p>
            <p>Urea in urine:{project.urea} </p>
          </div>
          </div>
          </headerb >
          <div id="faq" className="block-39 space-between-blocks">
            <div className="container">
            <div className="col-lg-8 col-xl-7 mx-auto text-center mb-5">
            <h3 className="card-2__title mb-2">แนวโน้มและความรุนแรง</h3>
              <p className="card-2__paragraph">
                จากการตรวจสอบก้อนนิ่วมีแนวโน้มที่จะขยายตัวใหญ่ขึ้นกว่าเดิมหากไปเข้ารับการรักษา
                และหากปล่อยให้นิ่วโตขึ้นกว่าเดิมอาจจะเกิดอาการแทรกซ้อนอื่นๆได้
              </p>
              </div>
          </div>
          <div className="card-2 d-flex">
            <div>
              <span className="card-2__symbol mx-auto">
                <i className="fas fa-mobile" />
              </span>
            </div>
            <div className="px-2" />
          </div>
        </div>
  {/* ===================================== */}
  <div id="features" className="block-11 space-between-blocks">
    <div className="container">
      {/* HEADER */}
      <div className="block__header col-lg-8 col-xl-7 mx-auto text-center">
        <h1 className="block__title mb-3">
          มีความเสี่ยง<span className="highlight" >"สูง"</span>
        </h1>
        <p className="block__paragraph mb-0">
          ผลการประเมินความเสี่ยงการเกิดโรคนิ่วในระบบทางเดินปัสสาวะ
          ด้วยระบบตรวจสอบและประเมินความเสี่ยงการเกิดโรคนิ่วในระบบทางเดินปัสสาวะด้วยปัญญาประดิษฐ์
        </p>
      </div>
      <div className="row align-items-center justify-content-center flex-column-reverse flex-lg-row px-2">
        <div className="card mb-3"></div>
        <div className="col-lg-8 col-xl-6">
          <div className="row">
            <div className="col-md-6 mb-2-1rem">
              <div className="card-1 card-1--selected text-center">
                <span className="card-1__symbol mx-auto mb-4">
                  <i className="fas fa-camera-retro" />
                </span>
                <h3 className="card-1__title mb-2">รูปภาพจากการวินิจฉัย</h3>
                <p className="card-2__paragraph">
                  <img
                    className="block-20__person-avatar"
                    src="assets/images/pic4.5.jpg"
                  />
                  <br />
                  ผลการตรวจประเมิน
                  พบผลึกแคลเซียมที่มีผลต่อการเกิดโรคนิ่วทั้งหมดจำนวน 238 ผลึก
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-2-1rem">
              <div className="card-1 text-center">
                <span className="card-1__symbol mx-auto mb-4">
                  <i className="fas fa-leaf" />
                </span>
                <h3 className="card-1__title mb-2">รูปแบบนิ่วที่พบในตัว</h3>
                <p className="card-2__paragraph">
                  <img
                    className="block-20__person-avatar"
                    src="assets/images/stone.jpg"
                  />
                  <br />
                  นิ่วขนาด 0.5-1 เซนติเมตร
                  ไม่ส่งผลต่อร่างกายแต่หากสะสมอาจเกิดผลร้ายกับร่างกายได้
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/* ======================================== */}
  <div id="faq" className="block-39 space-between-blocks">
    <div className="container">
      {/* HEADER */}
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
              3 – 6 เดือน เพื่อป้องกันการเกิดนิ่วซ้ำ
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
        </div>
         
         
          
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
          </div>
       
      </header>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}
// class logic extends React.Component{
//   Expression(a){
//     return(
//     render(){
//       let risk = thisExpression(62.5);
//        if (a => 50){
//         return(<div>ค่อนข้างสูง</div>);
      
//     }
//     if(a => 70){
//       return(<div>สูง</div>);
//     }}
//       )
//     }
  
      
//   }
  
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
