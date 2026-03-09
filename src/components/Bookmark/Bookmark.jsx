import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {tittle} = bookmark;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
           <h3 className="text-2xl">{tittle}</h3> 
        </div>
    );
};
Bookmark. PropTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;