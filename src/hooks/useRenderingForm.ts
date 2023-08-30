import {useEffect, useRef, useState} from "react";
import {FetchData} from "../configs/API.tsx";
import {NullDataToEmptyStrings, ScrollToTop} from "../components/RenderingForm/functions/RenderFunctions.ts";
import {RuleSetInterface} from "../configs/interface/PriceMatrixInterface.ts";

export const useRenderingForm = () => {

  const refOnTop = useRef(null)

  const [matrixData, setMatrixData] = useState<{ name: string; id: number; ruleSets: RuleSetInterface[] }>({name: "", id: 0, ruleSets: []})
  const [isLoadingSpin, setIsLoadingSpin] = useState<boolean>(true);
  const [isLastRuleSetAdded, setIsLastRuleSetAdded] = useState<boolean>(false);
  const [isRequestModal, setIsRequestModal] = useState<boolean>(false)
  const [isErrorModal, setIsErrorModal] = useState<boolean>(false)

  useEffect(() => {
    const fetchAndFormat = async () => {
      const data = await NullDataToEmptyStrings(await FetchData())
      setMatrixData(data)
      setIsLoadingSpin(false)
    }
    fetchAndFormat().then()
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
    matrixData,
    setIsRequestModal,
    isRequestModal,
    isLastRuleSetAdded,
    addRuleSetAnimate,
    setIsErrorModal,
    isErrorModal,
    DisplayError
  }
}
