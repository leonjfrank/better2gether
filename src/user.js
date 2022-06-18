import GUN from 'gun';
import 'gun/sea';
import 'gun/axe';

// Database
export const db = GUN();

// Gun User
export const user = db.user().recall({sessionStorage: true});
