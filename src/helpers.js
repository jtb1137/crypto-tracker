import React from 'react';

export const handleResponse = (resp) => {
    return resp.json().then(json => {
        return resp.ok ? json : Promise.reject(json);
    });
}

export const renderChangePercent = (percent) => {
    if (percent > 0) {
        return <span className="percent-increased">{percent}% &uarr;</span>
    } else if (percent < 0) {
        return <span className="percent-decreased">{percent} &darr;</span>
    } else {
        return <span>{percent}</span>
    }
}