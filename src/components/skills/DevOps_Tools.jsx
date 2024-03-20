import React from 'react';

const DevOps_Tools = () => {
  return (
    <div className='skills__content'>
      <h3 className='skills__title'>DevOps Tools</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Linux</h3>
              <span className='skills__level'>Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Docker</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>

{/*           <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Kubernetes</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div> */}
        </div>

        <div className='skills__group'>
          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Git(Version Control)</h3>
              <span className='skills__level'>Basic to almost Intermediate</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>AWS Cloud Services</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>

          <div className='skills__data'>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Azure Cloud Services</h3>
              <span className='skills__level'>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps_Tools;
