import { writable } from 'svelte/store';
const DEFAULT_NOTIFICATION_TIME = 5000;

export const notifications = writable([]);
export const notify = (msg, duration) => notifications.update(ntfs => [...ntfs, {
    msg,
    duration: duration || DEFAULT_NOTIFICATION_TIME,
}]);
