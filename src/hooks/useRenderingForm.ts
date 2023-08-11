import {useEffect, useRef, useState} from "react";
import {FetchData, ReformatRuleSets} from "../configs/API.tsx";
import {ScrollToTop} from "../components/RenderingForm/functions/RenderFunctions.ts";

export function useRenderingForm() { // TODO: use arrow function

  const refOnTop = useRef(null)

  const [resolvedRuleSets, setResolvedRuleSets] = useState([])
  const [matrixData, setMatrixData] = useState({name: "", id: 0})
  const [isLoadingSpin, setIsLoadingSpin] = useState<boolean>(true);
  const [isLastRuleSetAdded, setIsLastRuleSetAdded] = useState<boolean>(false);
  const [removeRuleSetAnimationIndex, setRemoveRuleSetAnimationIndex] = useState<number | null>(null);
  const [isRequestModal, setIsRequestModal] = useState<boolean>(false)
  const [isErrorModal, setIsErrorModal] = useState<boolean>(false)

  useEffect(() => {
    FetchData().then((res) => setMatrixData(res)) //TODO: change this for async / await -> newer and better readability
    ReformatRuleSets()
      .then((res) => {
        setResolvedRuleSets(res);
        setIsLoadingSpin(false);
      })
  }, [isLoadingSpin])

  const addRuleSetAnimate = () => {
    setIsLastRuleSetAdded(true);
    setTimeout(() => {
      setIsLastRuleSetAdded(false);
      ScrollToTop(refOnTop);
    }, 500);
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
