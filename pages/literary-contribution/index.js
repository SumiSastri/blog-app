import Link from 'next/link'


const LiteraryContribution = () => {
    return ( <div>
        <h2>Prema Sastri's contribution to the diaspora of Indian authors writing in English</h2>
        <p>Writing since the early 1950s, Prema Sastri was a pioneering Indian author writing in English. Following in the footsteps of RK Narayan, Prema's contribution to the Indian literary world was as a short-story writer. Inspired by Earnest Hemingway, her style is crisp and lacks figurative decoration of metaphors, similies and other literary `vanities`. Her belief was the plot and character should drive the story. </p>
        <hr/>
        <div >    
<Link href="literary-contribution/short-stories"><a><h3>Short Stories</h3></a></Link>
<Link href="literary-contribution/plays"><a><h3>Plays</h3></a></Link>
<Link href="literary-contribution/childrens-stories"><a><h3>Children's Stories</h3></a></Link>
</div> 
    </div> );
}
export default LiteraryContribution;