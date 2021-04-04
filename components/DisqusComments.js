import {DiscussionEmbed} from "disqus-react"


const DisqusComments = ({ data, cap, genere}) => {
  const disqusShortname = "xipanca"
  const disqusConfig = {
    url: "http://localhost:3000/caps/solo-leveing/1",
    identifier: genere, 
    title: cap
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;