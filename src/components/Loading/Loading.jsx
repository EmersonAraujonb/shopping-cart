import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <div style={{backgroundColor:'#DDD', zIndex: -1}}>
        <SkeletonTheme baseColor="#ddd" highlightColor="#fff">
            <Skeleton enableAnimation  height={250} style={{marginBottom: 20}} />
            <Skeleton  height={40} style={{marginBottom: 10}}/>
            <Skeleton  height={60} />
        </SkeletonTheme>
        </div>
    );
}

export default Loading;
