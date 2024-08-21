
//props:{ bgColor:string ,fontsize:number} or

// this is an interface so we have to mention type 

type color = 'text-green-500'|'text-rose-500'|'text-gray-500'

type TypeProps = {
  bgColor: 'bg-red-500'|'bg-blue-500'|'bg-green-500'; // This is a union type, allowing 'bgColor' to be one of the specified string literals 
  textcolor?:color;
  fontSize: number;
  items?:number[]; // you can only number inside this array , which allow infinit number
  limitedItems?:[number,number,number];// you can add only three number inside this array
  isIt?: boolean;  // Optional field: use '?' to indicate that this prop may not always be provided.
};


function Lesson({bgColor,fontsize,textcolor,limitedItems}:typeprops) {

    let word = 'string'

    console.log(limitedItems)
  
  return (
    <div className={`text-5xl ${textcolor} ${bgColor} border border-gray-900`}>Lesson</div>
  )
}

export default Lesson