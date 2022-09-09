import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import axios from 'axios';

import { connect } from "redux/blockchain/blockchainActions";
import { fetchDataBase } from "redux/data/dataActions";
import * as s from "./globalStyles";

import mint_images from "images/video-banner20.mp4";
import benefit_images from "images/render_1.mp4";
import benefit_images1 from "images/01.mp4";

import classes from "./MintSection.module.css";

export const StyledButton = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  text-decoration: none;
  background: #06afca;
  border-radius: 10px;
  padding: 8px 59px;
  border: none;
  margin-top: 15px;
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: #06afca;
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: light-blue;
  text-decoration: none;
`;

function MintSection() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [chainData, setChainData] = useState({
    totalSupplyT1: undefined,
    totalSupplyT2: undefined,
    totalSupply: undefined,
    mintStatus: "Connect Wallet Below",
    userMints: undefined,
  });
  const wlApiEndpoint = "https://summit-wl-api.herokuapp.com/";
  const [whitelistProof, setWhitelistProof] = useState(null);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT`);
  const [mintAmount, setMintAmount] = useState(1);

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    WEI_COST2: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    if (chainData.mintStatus == "Whitelist Minting" && whitelistProof == null) {
      return;
    }
    let cost = CONFIG.WEI_COST;
    let totalCostWei = String(cost * mintAmount);
    console.log("Cost: ", totalCostWei);
    setFeedback(`Minting your NFT...`);
    setClaimingNft(true);
    if (chainData.mintStatus == "Whitelist Minting") {
      blockchain.smartContract.methods
        .mintWL(true, mintAmount, whitelistProof)
        .send({
          // gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(`Mint successful! Visit OpenSea to view it`);
          setClaimingNft(false);
          getData();
        });
    } else {
      blockchain.smartContract.methods
        .mintPublic(true, mintAmount)
        .send({
          // gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(`Mint successful! Visit OpenSea to view it`);
          setClaimingNft(false);
          getData();
        });
    }
  };

  const claimNFTs2 = () => {
    if (chainData.mintStatus == "Whitelist Minting" && whitelistProof == null) {
      return;
    }
    let cost = CONFIG.WEI_COST2;
    let totalCostWei = String(cost * mintAmount);
    console.log("Cost: ", totalCostWei);
    setFeedback(`Minting your NFT...`);
    setClaimingNft(true);
    if (chainData.mintStatus == "Whitelist Minting") {
      blockchain.smartContract.methods
        .mintWL(false, mintAmount, whitelistProof)
        .send({
          // gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(`Mint successful! Visit OpenSea to view it`);
          setClaimingNft(false);
          getData();
        });
    } else {
      blockchain.smartContract.methods
        .mintPublic(false, mintAmount)
        .send({
          // gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(`Mint successful! Visit OpenSea to view it.`);
          setClaimingNft(false);
          getData();
        });
    }
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    if (chainData.userMints + newMintAmount <= 3) {
      setFeedback(`Click buy to mint your NFT`);
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 3) {
      newMintAmount = 3;
    }
    if (chainData.userMints + newMintAmount > 3) {
      setFeedback(`Only 3 mints allowed per wallet`);
      newMintAmount = mintAmount;
    }
    setMintAmount(newMintAmount);
  };

  const getData = async () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      const request = await fetchDataBase();
      let mintStatus = "Connect wallet";
      if (request.mintStatus == 0) {
        mintStatus = "Not minting yet";
      } else if (request.mintStatus == 1) {
        // Must get whitelist info as well
        mintStatus = "Whitelist Minting";
        try {
          const apiCall = await axios.get(wlApiEndpoint, {
            params: {
              address: blockchain.account,
            },
          });
          if (apiCall.data.isVerified) {
            setWhitelistProof(apiCall.data.proof);
          }
        } catch (error) {
          console.log(error);
        }
      } // End whitelist requests
      else if (request.mintStatus == 2) {
        mintStatus = "Public Minting";
      } else if (request.mintStatus == 3) {
        mintStatus = "Sold out!";
      }
      setChainData({
        totalSupplyT1: request.totalSupplyT1,
        totalSupplyT2: request.totalSupplyT2,
        totalSupply: request.totalSupply,
        mintStatus: mintStatus,
        userMints: request.userMints,
      });
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div className={classes.mintSection}>
      <section>
        <video
          autoPlay
          playsInline
          loop
          muted
          src={mint_images}
          type="mp4"
          className={classes.myVideo}
        ></video>

        <div className={classes.heroContent}>
          <p className="glowTitle2" style={{ marginBottom: "0px" }}>
            MINT
          </p>

          <br />

          <p className={classes.heroText}>
            Join today and become a part of the most exclusive
            <br />
            and rewarding club in Austin,TX
          </p>

          <br />

          <p className={classes.statusText}>Status</p>

          <br />

          <div className={classes.buttonContainer}>
            <p className="blueBtn">{chainData.mintStatus}</p>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row pt-5">
          <div className="col-md-6 col-sm-12 ">
            <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
              <s.SpacerLarge />
              <s.Container
                flex={2}
                jc={"center"}
                ai={"center"}
                style={{
                  backgroundColor: "#363942",
                  padding: 24,
                  borderRadius: 24,
                  border: "0px dashed #000",
                  boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                }}
              >
                {/* <img src={mint_images1} alt="" className="tier-minted1" /> */}
                <div className={classes.videoContainer}>
                  <video
                    autoPlay
                    playsInline
                    loop
                    muted
                    src={benefit_images}
                    type="mp4"
                    className={classes.myVideo1}
                  ></video>
                </div>
                <s.TextTitle
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    fontWeight: "",
                    color: "#ffffff",
                  }}
                >
                  Tier 1
                </s.TextTitle>
                <s.TextTitle
                  style={{
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: "",
                    color: "#ffffff",
                  }}
                >
                  Minted: {chainData.totalSupplyT1} / {CONFIG.TIER1_MAX_SUPPLY}
                </s.TextTitle>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "#ffffff",
                  }}
                ></s.TextDescription>

                <s.SpacerSmall />
                {Number(chainData.totalSupplyT1) >= CONFIG.TIER1_MAX_SUPPLY ? (
                  <>
                    <s.TextTitle style={{ textAlign: "center", color: "#ffffff" }}>
                      The Tier 1 sale has ended.
                    </s.TextTitle>
                    <s.SpacerSmall />
                    <s.TextDescription style={{ textAlign: "center", color: "#ffffff" }}>
                      You can still find {CONFIG.NFT_NAME} here:
                    </s.TextDescription>
                    <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                      {CONFIG.MARKETPLACE}
                    </StyledLink>
                  </>
                ) : Number(
                  chainData.mintStatus == "Whitelist Minting" && whitelistProof == null
                ) ? (
                  <>
                    <s.TextTitle style={{ textAlign: "center", color: "#ffffff" }}>
                      Your address is not eligible for the whitelist sale
                    </s.TextTitle>
                    <s.SpacerSmall />
                    <s.TextDescription style={{ textAlign: "center", color: "#ffffff" }}>
                      You can mint soon during the public sale, or check out the collection here:
                    </s.TextDescription>
                    <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                      {CONFIG.MARKETPLACE}
                    </StyledLink>
                  </>
                ) : (
                  <>
                    <s.TextTitle style={{ textAlign: "center", color: "#ffffff" }}>
                      Price: {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}
                    </s.TextTitle>
                    <s.SpacerXSmall />

                    <s.SpacerSmall />
                    {blockchain.account === "" || blockchain.smartContract === null ? (
                      <s.Container ai={"center"} jc={"center"}>
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "#ffffff",
                          }}
                        >
                          Connect to the {CONFIG.NETWORK.NAME} network
                        </s.TextDescription>
                        <s.SpacerSmall />
                        <StyledButton
                          style={{
                            background: "#06AFCA",
                            color: "#ffffff",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          CONNECT
                        </StyledButton>
                        {blockchain.errorMsg !== "" ? (
                          <>
                            <s.SpacerSmall />
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "var(--accent-text)",
                              }}
                            >
                              {blockchain.errorMsg}
                            </s.TextDescription>
                          </>
                        ) : null}
                      </s.Container>
                    ) : (
                      <>
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {feedback}
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <s.Container ai={"center"} jc={"center"} fd={"row"}>
                          <StyledRoundButton
                            style={{ lineHeight: 0.4 }}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            -
                          </StyledRoundButton>
                          <s.SpacerMedium />
                          <s.TextDescription
                            style={{
                              textAlign: "center",
                              color: "var(--accent-text)",
                            }}
                          >
                            {mintAmount}
                          </s.TextDescription>
                          <s.SpacerMedium />
                          <StyledRoundButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </StyledRoundButton>
                        </s.Container>
                        <s.SpacerSmall />
                        <s.Container ai={"center"} jc={"center"} fd={"row"}>
                          <StyledButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs();
                              getData();
                            }}
                          >
                            {claimingNft ? "BUSY" : "MINT"}
                          </StyledButton>
                        </s.Container>
                      </>
                    )}
                  </>
                )}
                <s.SpacerMedium />
              </s.Container>
              <s.SpacerLarge />
            </ResponsiveWrapper>
          </div>

          <div className="col-md-6 col-sm-12">
            <ResponsiveWrapper flex={1} style={{ padding: 24 }} test>
              <s.SpacerLarge />
              <s.Container
                flex={2}
                jc={"center"}
                ai={"center"}
                style={{
                  backgroundColor: "#363942",
                  padding: 24,
                  borderRadius: 24,
                  border: "0px dashed #000",
                  boxShadow: "0px 5px 11px 2px rgba(0,0,0,0.7)",
                }}
              >
                {/* <img src={mint_images2} alt="" className="tier-minted1" /> */}
                <div className={classes.videoContainer}>
                  <video
                    autoPlay
                    playsInline
                    loop
                    muted
                    src={benefit_images1}
                    type="mp4"
                    className={classes.myVideo1}
                  ></video>
                </div>
                <s.TextTitle
                  style={{
                    textAlign: "center",
                    fontSize: 40,
                    fontWeight: "",
                    color: "#ffffff",
                  }}
                >
                  Tier 2
                </s.TextTitle>
                <s.TextTitle
                  style={{
                    textAlign: "center",
                    fontSize: 30,
                    fontWeight: "",
                    color: "#ffffff",
                  }}
                >
                  Minted: {chainData.totalSupplyT2} / {CONFIG.TIER2_MAX_SUPPLY}
                </s.TextTitle>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "#ffffff",
                  }}
                ></s.TextDescription>

                <s.SpacerSmall />
                {Number(chainData.totalSupplyT2) >= CONFIG.TIER2_MAX_SUPPLY ? (
                  <>
                    <s.TextTitle style={{ textAlign: "center", color: "#ffffff" }}>
                      The Tier 2 sale has ended.
                    </s.TextTitle>
                    <s.SpacerSmall />
                    <s.TextDescription style={{ textAlign: "center", color: "#ffffff" }}>
                      You can still find {CONFIG.NFT_NAME} here:
                    </s.TextDescription>
                    <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                      {CONFIG.MARKETPLACE}
                    </StyledLink>
                  </>
                ) : Number(
                  chainData.mintStatus == "Whitelist Minting" && whitelistProof == null
                ) ? (
                  <>
                    <s.TextTitle style={{ textAlign: "center", color: "#ffffff" }}>
                      Your address is not eligible for the whitelist sale
                    </s.TextTitle>
                    <s.SpacerSmall />
                    <s.TextDescription style={{ textAlign: "center", color: "#ffffff" }}>
                      You can mint soon during the public sale, or check out the collection here:
                    </s.TextDescription>
                    <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                      {CONFIG.MARKETPLACE}
                    </StyledLink>
                  </>
                ) : (
                  <>
                    <s.TextTitle style={{ textAlign: "center", color: "#ffffff" }}>
                      Price: {CONFIG.DISPLAY_COST2} {CONFIG.NETWORK.SYMBOL}
                    </s.TextTitle>
                    <s.SpacerXSmall />

                    <s.SpacerSmall />
                    {blockchain.account === "" || blockchain.smartContract === null ? (
                      <s.Container ai={"center"} jc={"center"}>
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "#ffffff",
                          }}
                        >
                          Connect to the {CONFIG.NETWORK.NAME} network
                        </s.TextDescription>
                        <s.SpacerSmall />
                        <StyledButton
                          style={{
                            background: "#06AFCA",
                            color: "#ffffff",
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          CONNECT
                        </StyledButton>
                        {blockchain.errorMsg !== "" ? (
                          <>
                            <s.SpacerSmall />
                            <s.TextDescription
                              style={{
                                textAlign: "center",
                                color: "var(--accent-text)",
                              }}
                            >
                              {blockchain.errorMsg}
                            </s.TextDescription>
                          </>
                        ) : null}
                      </s.Container>
                    ) : (
                      <>
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "var(--accent-text)",
                          }}
                        >
                          {feedback}
                        </s.TextDescription>
                        <s.SpacerMedium />
                        <s.Container ai={"center"} jc={"center"} fd={"row"}>
                          <StyledRoundButton
                            style={{ lineHeight: 0.4 }}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            -
                          </StyledRoundButton>
                          <s.SpacerMedium />
                          <s.TextDescription
                            style={{
                              textAlign: "center",
                              color: "var(--accent-text)",
                            }}
                          >
                            {mintAmount}
                          </s.TextDescription>
                          <s.SpacerMedium />
                          <StyledRoundButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </StyledRoundButton>
                        </s.Container>
                        <s.SpacerSmall />
                        <s.Container ai={"center"} jc={"center"} fd={"row"}>
                          <StyledButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              claimNFTs2();
                              getData();
                            }}
                          >
                            {claimingNft ? "BUSY" : "MINT"}
                          </StyledButton>
                        </s.Container>
                      </>
                    )}
                  </>
                )}
                <s.SpacerMedium />
              </s.Container>
              <s.SpacerLarge />
            </ResponsiveWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintSection;
