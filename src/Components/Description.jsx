import React from 'react';
import design from '../../src/assets/design.png'
import web from '../../src/assets/web.png'
import office from '../../src/assets/office.png'
import english from '../../src/assets/icons8-english-96.png'

const Description = () => {
    return (
        <div>
             <div className="mt-6 text-4xl text-center font-bold  font-custom">Find Your Career Direction</div>

             <div className="mt-8 text-xl flex items-center justify-between gap-3">
                {/* c1 */}
                 <div className='flex items-center justify-between gap-5 p-2 px-4 bg-[#F3CFCF] rounded-lg'>
                   <div><img src={design} alt=""  className='w-[80px] h-[80px]'/></div>
                   <div>
                      <p className="text-xl font-bold">Graphics & Multimedia</p>
                      <p className="text-base font-bold">2 Course</p>
                   </div>
                 </div>
                 {/* c2 */}
                 <div className='flex items-center justify-between gap-5 p-2 px-4 bg-[#F3CFCF] rounded-lg'>
                   <div><img src={web} alt=""  className='w-[80px] h-[80px]'/></div>
                   <div>
                      <p className="text-xl font-bold">Web Design & Development</p>
                      <p className="text-base font-bold">2 Course</p>
                   </div>
                 </div>
                 {/* c3 */}
                 <div className='flex items-center justify-between gap-5 p-2 px-4 bg-[#F3CFCF] rounded-lg'>
                   <div><img src={office} alt=""  className='w-[80px] h-[80px]'/></div>
                   <div>
                      <p className="text-xl font-bold">Basic Computer</p>
                      <p className="text-base font-bold">1 Course</p>
                   </div>
                 </div>
                 {/* c4 */}
                 <div className='flex items-center justify-between gap-5 p-2 px-4 bg-[#F3CFCF] rounded-lg'>
                   <div><img src={english} alt=""  className='w-[80px] h-[80px]'/></div>
                   <div>
                      <p className="text-xl font-bold">Microsoft Office</p>
                      <p className="text-base font-bold">1 Course</p>
                   </div>
                 </div>
             </div>

        </div>
    );
};

export default Description;