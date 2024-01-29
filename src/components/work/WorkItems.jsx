import React from 'react';

const WorkItems = ({ item }) => {
  return (
    <div className='work__card' key={item.id}>
      <img src={item.image} alt='' className='work__img' />
      <h3 className='work__title'>{item.title}</h3>
      <a href={item.livePreview} className='work__button'>
        Live Preview <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
      <a href={item.sourceCode} className='work__button'>
        Source Code <i className='bx bx-right-arrow-alt work__button-icon'></i>
      </a>
      

      {item.category === "Dockerized Applications" && (
        <a href={item.dockerHub} className='work__button'>
          DockerHub <i className='bx bx-right-arrow-alt work__button-icon'></i>
        </a>
      )}
      
    </div>
  );
};

export default WorkItems;
