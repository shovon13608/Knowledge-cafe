import PropTypes from 'prop-types';
// import Blogs from '../Blogs/Blogs';
// import {IoBookmarkOutline } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog ,handleAddToBookmark ,handleMarkAsRead }) => {
    const { id ,tittle, cover, author, author_img, reading_time, poster_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the tittle ${tittle}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{poster_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-red-700 text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{tittle}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a> </span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id,reading_time)} className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};

export default Blog;
Blog.proptypes = {
    blog: PropTypes.object.isRequired, 
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}