import PostItem from "./PostItem";


const posts = [
  { id: 1, subject: '제목1', poster: '작성자1' },
  { id: 2, subject: '제목2', poster: '작성자2' },
  { id: 3, subject: '제목3', poster: '작성자3' },
  { id: 4, subject: '제목4', poster: '작성자4' },
  { id: 5, subject: '제목5', poster: '작성자5' },
];

const PostItems = () => {

    // const post = posts.map((p, i) => <li key={i}>{p.subject} / {p.poster}</li>)

    return(
        <ul>
            {/* {post} */}
            {posts.map(p => <PostItem key={p.id} post={p}/>)}
        </ul>
    );
};

export default PostItems;
