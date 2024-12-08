import React from 'react';

const ListDesign = ({mywishList}) => {
   console.log(mywishList);
    return (
        <div>
            {mywishList.length}
        </div>
    );
};

export default ListDesign;