import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const ReadSingleItem = (props) => {
    return (
        <div className="grid-container-si">
            <Head><title>{props.singleItem.title}</title></Head>
            <div>
                <Image src={props.singleItem.image} width={750} height={500} alt="item-image" />
            </div>
            <div>
                <h1>{props.singleItem.title}</h1>
                <h2>¥{props.singleItem.price}</h2>
                <hr/>
                <p>{props.singleItem.description}</p>
                <div>
                    <Link href={`/item/update/${props.singleItem._id}`} legacyBehavior><a>アイテム編集</a></Link>
                    <Link href={`/item/delete/${props.singleItem._id}`} legacyBehavior><a>アイテム削除</a></Link>
                </div>
            </div>
        </div>
    )
}

export default ReadSingleItem

export const getServerSideProps = async(context) => {
    const response = await fetch(`http://localhost:3000/api/item/${context.query.id}`)
    const singleItem = await response.json()

    console.log(context);
    return {
        props: singleItem
    }
}
