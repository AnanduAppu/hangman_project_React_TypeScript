import React from 'react'

function HangmanDrawing() {

    const Head = (
        <div style={{
            height:"50px",width:"50px", borderRadius:"100%",border:"10px solid black", position:"absolute",top:"50px",right:"-20px"
        }}>
        </div>
    )

    const Body = (
        <div style={{
            height:"120px",width:"10px", background:"black", position:"absolute",top:"100px",right:"0"
        }}>
        </div>
    )

    
    const RightArm = (
        <div style={{
            height:"10px",width:"100px", background:"black", position:"absolute",top:"150px",right:"-100px",rotate:"-30deg",transformOrigin:"left bottom"
        }}>
        </div>
    )


       
    const LeftArm = (
        <div style={{
            height:"10px",width:"100px", background:"black", position:"absolute",top:"150px",right:"10px",rotate:"30deg",transformOrigin:"right bottom"
        }}>
        </div>
    )

    const RightLeg = (
        <div style={{
            height:"10px",width:"100px", background:"black", position:"absolute",top:"210px",right:"-90px",rotate:"60deg",transformOrigin:"left bottom"
        }}>
        </div>
    )
    const LeftLeg = (
        <div style={{
            height:"10px",width:"100px", background:"black", position:"absolute",top:"210px",right:"0px",rotate:"-60deg",transformOrigin:"right bottom"
        }}>
        </div>
    )
  return (
    <div style={{position:"relative"}}>
        {Head}
        {Body}
        {RightArm}
        {LeftArm}
        {RightLeg}
        {LeftLeg}
         <div style={{height:"50px",width:"10px",background:"black",marginLeft:'120px',position:"absolute", top:"0",right:"0"}}></div>
        <div style={{height:"10px",width:"200px",background:"black",marginLeft:'120px'}}></div>
        <div style={{height:"400px",width:"10px",background:"black",marginLeft:'120px'}}></div>
        <div style={{height:"10px",width:"250px",background:"black"}}>

        </div>

    </div>
  )
}

export default HangmanDrawing