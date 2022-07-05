import React from 'react';
import { Link } from 'react-router-dom';

const FollowButton = () => {
    return (
<Link class="btn btn-sm action-btn ng-binding btn-outline-secondary" >
<i class="ion-plus-round"></i>
&nbsp;
Подписаться
</Link>
    );
};

export default FollowButton;