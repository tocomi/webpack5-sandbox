import { hello, usePromise } from './greet';
import { isNativeCode } from './isNativeCode';

hello({ name: 'Daemon Kogure' });
usePromise({ message: 'resolved' });
isNativeCode({ method: Promise });
