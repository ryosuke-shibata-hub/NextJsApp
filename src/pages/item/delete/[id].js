import Image from "next/image";

const DeleteItem = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(`http://localhost:3000/api/item/delete/${props.singleItem._id}`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`
                },
            })
            const jsonData = await response.json()
            alert(jsonData.message)
        } catch (error) {
            console.log(error);
            alert("アイテム削除失敗")
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>アイテム削除</h1>
                <h2>{props.singleItem.title}</h2>
                <Image src={props.singleItem.image} width={750} height={500} alt="item-image" />
                <h3>¥{props.singleItem.price}</h3>
                <p>{props.singleItem.description}</p>
                <button>削除</button>
            </form>
        </div>
    )
}

export default DeleteItem

export const getServerSideProps = async (context) => {
    const response = await fetch(`http://localhost:3000/api/item/${context.query.id}`)
    const singleItem = await response.json()

    return {
        props: singleItem
    }
}
