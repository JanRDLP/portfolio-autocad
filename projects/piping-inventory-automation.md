# Piping Inventory Automation

## Project overview

A materials takeoff needs to connect each item back to its drawing specification, service, and location. The project applies that link to a CSV export for review and procurement.

## My contribution

I developed an AutoLISP workflow that creates and identifies piping parts in AutoCAD and transfers the tagged records to a structured CSV. I used the export to consolidate a materials list for a quotation and a purchase order.

## Workflow

- Create or tag each component and record the relevant drawing context.
- Export the records with service, component type, nominal size, original tag, commercial description, and length where applicable.
- Review and consolidate the exported records into a materials list.

## Results

The project export contains 1,409 records across 17 component types and 10 service categories. The portfolio shows an eight-row excerpt of the export.

## Evidence

The export contains 1,409 records across 17 component types and 10 service categories. It includes original part tags, commercial descriptions, and lengths where applicable.

[View the sample rows](../assets/inventory-preview.png)
