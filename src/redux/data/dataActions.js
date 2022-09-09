// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      dispatch(
        fetchDataSuccess({
          totalSupply,
          // cost,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};

export const fetchDataBase = async () => {
  try {
    const state = store.getState();
    let totalSupply = await state.blockchain.smartContract.methods.totalSupply().call();
    let totalSupplyT1 = await state.blockchain.smartContract.methods.totalSupplyT1().call();
    let totalSupplyT2 = await state.blockchain.smartContract.methods.totalSupplyT2().call();
    let mintStatus = await state.blockchain.smartContract.methods.getStatus().call();
    let userMints = await state.blockchain.smartContract.methods.getWalletMints(state.blockchain.account)

    return ({
        totalSupply,
        totalSupplyT1,
        totalSupplyT2,
        mintStatus,
        userMints
      });
  } catch (err) {
    console.log(err);
    dispatch(fetchDataFailed("Could not load data from contract."));
  }
};

