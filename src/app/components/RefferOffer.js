import Link from "next/link";
const RefferOffer = () =>{
    return(
        <>
        <div className="container">
            <div className="reffer-offer-blk">
                <h2>Refer & get 20% discount </h2>
                <h5>Be a best friend share your love and get 20% flat discount</h5>
                <div className="reffer-bnt-blk">
                    <Link href="#">Refer Now</Link>
                </div>
            </div>
        </div>
        </>
    )
}
export default RefferOffer;