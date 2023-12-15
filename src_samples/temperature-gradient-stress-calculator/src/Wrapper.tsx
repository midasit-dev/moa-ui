import React from 'react';
import App from './App';
import { VerifyDialog, VerifyUtil } from '@midasit-dev/moaui';
import { setGlobalVariable, getGlobalVariable } from './pyscript_g_variables';

const Wrapper = () => {
	const [ installed, setInstalled ] = React.useState(false);

	//fill in global variables
	React.useEffect(() => {
    function checkPyScriptReady(callback : any) {
      // if pyscript is ready, call callback function
      if (pyscript && pyscript.interpreter) {
        setGlobalVariable();
        getGlobalVariable();
				setInstalled(true);
      } else {
        // if not, wait 100ms and try again
        setTimeout(() => checkPyScriptReady(callback), 100);
      }
    }
 
    checkPyScriptReady(() => {});
  }, []);

	return (
		<>
			<VerifyDialog />
			{installed && VerifyUtil.isExistQueryStrings('mapiKey') &&
				<>
					<App />
				</>
			}
		</>
	)
}

export default Wrapper;