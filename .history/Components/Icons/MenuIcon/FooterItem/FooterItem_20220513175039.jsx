export default function FooterItem({Data}){

    return(<>
    
    <div className="He">


{Data.map(item =>{
    return<>
    <div>{item}</div></>
})}
    </div>
    
    </>)
}