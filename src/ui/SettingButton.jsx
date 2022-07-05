import React from 'react';
import { Link } from 'react-router-dom';

const SettingButton = () => {
    return (
        <Link to ='/settings' ui-sref="app.settings" class="btn btn-sm btn-outline-secondary action-btn">
        <i class="ion-gear-a"></i> Редактировать профиль
      </Link>
    );
};

export default SettingButton;