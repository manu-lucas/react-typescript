import { FC, useMemo } from "react";
import { Font } from "@react-pdf/renderer";
import { Box } from "../../components/base";
import { Document, Page, Container } from "../../components/base";
import InvoiceInfo from "./invoice-info";
import InvoiceFooter from "./invoice-footer";
import InvoiceSender from "./invoice-sender";
import InvoiceSummary from "./invoice-summary";
import InvoiceLineItem from "./invoice-line-item";
import InvoiceTitle from "../invoices/invoice-title";
import InvoicePaymentInfo from "./invoice-payment-info";
import InvoiceItemHeader from "./invoice-line-item-header";
import InvoiceCompanyLogo from "../invoices/invoice-company-logo";
import InvoiceTermAndConditions from "./invoice-term-and-condition";
import InvoiceRecipient from "../../components/invoices/invoice-recipient";
import { IInvoice, IInvoicePaymentInfo } from "../../interfaces/invoice";

interface Props {
  invoice: IInvoice;
}

const InvoicePdf: FC<Props> = ({ invoice }) => {
  console.log("Invoice in invoicepdf:", invoice);
  const subTotal = useMemo(() => {
    let subTotal = 0;
    invoice.items.forEach((i) => {
      const quantityNumber = parseFloat(i.quantity);
      const rateNumber = parseFloat(i.rate);
      const amount =
        quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;
      subTotal += amount;
    });
    return subTotal;
  }, [invoice.items]);

  const saleTax = useMemo(() => {
    const taxRate = parseFloat(String(invoice.taxRate)) || 0;
    return subTotal ? (subTotal * taxRate) / 100 : 0;
  }, [invoice.items, invoice.taxRate]);

  Font.registerHyphenationCallback((word) => [word]);

  return (
    <Document>
      <Page>
        <Container>
          <InvoiceTitle title="INVOICE" />
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <Box
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                marginRight: "15px",
              }}
            >
              <InvoiceCompanyLogo
                logo={invoice.logo}
                onUploadImage={() => null}
              />
              <InvoiceSender from={invoice.sender} />
            </Box>
            <Box
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                marginLeft: "15px",
              }}
            >
              <InvoiceRecipient recipient={invoice.recipient} />
              <InvoiceInfo
                invoiceNumber={invoice.invoiceNumber}
                date={invoice.date}
                due={String(invoice.due)}
              />
            </Box>
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <InvoiceItemHeader />
            {Array.isArray(invoice.items) && invoice.items.length > 0
              ? invoice.items.map((item, index) => (
                  <InvoiceLineItem
                    dispatchAlert={() => null}
                    onChange={() => null}
                    key={String(index)}
                    index={index}
                    item={item}
                    lastItem={invoice.items.length - 1 === index}
                  />
                ))
              : null}
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <Box style={{ display: "flex", flex: 1, flexDirection: "column" }}>
              <InvoicePaymentInfo
                paymentInfo={invoice.paymentInfo as IInvoicePaymentInfo}
              />
            </Box>
            <Box style={{ display: "flex", flex: 1, flexDirection: "column" }}>
              <InvoiceSummary
                subTotal={subTotal}
                taxRate={Number(invoice.taxRate)}
                saleTax={saleTax}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              width: "70%",
              marginBottom: "20px",
            }}
          >
            <InvoiceTermAndConditions terms={String(invoice.terms)} />
          </Box>
        </Container>
        <InvoiceFooter message={invoice.footerMessages} />
      </Page>
    </Document>
  );
};

export default InvoicePdf;
