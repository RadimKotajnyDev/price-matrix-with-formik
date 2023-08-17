import {useEffect, useRef, useState} from "react";
import {FetchData, ReformatRuleSets} from "../configs/API.tsx";
import {ScrollToTop} from "../components/RenderingForm/functions/RenderFunctions.ts";

export const useRenderingForm = () => {

  const refOnTop = useRef(null)

  const [resolvedRuleSets, setResolvedRuleSets] = useState([])
  const [matrixData, setMatrixData] = useState({name: "", id: 0})
  const [isLoadingSpin, setIsLoadingSpin] = useState<boolean>(true);
  const [isLastRuleSetAdded, setIsLastRuleSetAdded] = useState<boolean>(false);
  const [removeRuleSetAnimationIndex, setRemoveRuleSetAnimationIndex] = useState<number | null>(null);
  const [isRequestModal, setIsRequestModal] = useState<boolean>(false)
  const [isErrorModal, setIsErrorModal] = useState<boolean>(false)

  useEffect(() => {
    const fetchDataAsync = async () => {
      const data = await FetchData();
      setMatrixData(data);
    };
    const reformatRuleSetsAsync = async () => {
      const reformattedData = await ReformatRuleSets();
      setResolvedRuleSets(reformattedData);
      setIsLoadingSpin(false);
    };
    fetchDataAsync().then()
    reformatRuleSetsAsync().then()
  }, [isLoadingSpin]);

  const addRuleSetAnimate = () => {
    setIsLastRuleSetAdded(true);
    setTimeout(() => {
      setIsLastRuleSetAdded(false);
    }, 500);
    ScrollToTop(refOnTop);
  };

  useEffect(() => {
    if (isRequestModal) {
      const timeout = setTimeout(() => {
        setIsRequestModal(false)
      }, 1250);
      return () => clearTimeout(timeout);
    }
  }, [isRequestModal]);

  const DisplayError = () => {
    setIsErrorModal(true)
    setIsRequestModal(true)
  }

  return {
    refOnTop,
    setIsLoadingSpin,
    isLoadingSpin,
    resolvedRuleSets,
    matrixData,
    setIsRequestModal,
    isRequestModal,
    isLastRuleSetAdded,
    setRemoveRuleSetAnimationIndex,
    removeRuleSetAnimationIndex,
    addRuleSetAnimate,
    setIsErrorModal,
    isErrorModal,
    DisplayError
  }
}
