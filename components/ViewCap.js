import Image from 'next/image'

export default function ViewCap({item}) {
  const { API_URL } = process.env

    return (
        <>
          <div className="CapsImg">
            <img key={item.id} src={ API_URL + item.url}/>
          </div>
        </>
    )
}

