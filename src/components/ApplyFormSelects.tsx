"use client";

/**
 * ApplyFormSelects — the two dropdown fields on the directory application form.
 *
 * These live in their own client component so /directory/apply can stay a server
 * component: Select is a controlled Headless UI Listbox and needs local state.
 *
 * The two fields are exported separately rather than as one block because they
 * sit in non-adjacent cells of the form's grid (Organization Type in cell 2,
 * Primary Region in cell 5), so each has to be dropped into its own slot.
 *
 * !bg-plum overrides Select's default plum-light button: the application form
 * sits on a plum-light card, and its inputs are plum.
 */

import { useState } from "react";
import Select from "@/components/Select";

const buttonClass = "!bg-plum";

const typeOptions = [
  { value: "", label: "Select type..." },
  { value: "nonprofit", label: "Nonprofit / 501(c)(3)" },
  { value: "church", label: "Church / Religious Organization" },
  { value: "ministry", label: "Ministry / Para-Church" },
  { value: "forprofit", label: "Kingdom-Minded Business" },
];

const regionOptions = [
  { value: "", label: "Select region..." },
  { value: "North America", label: "North America" },
  { value: "Latin America", label: "Latin America" },
  { value: "South America", label: "South America" },
  { value: "East Africa", label: "East Africa" },
  { value: "West Africa", label: "West Africa" },
  { value: "Southeast Asia", label: "Southeast Asia" },
  { value: "South Asia", label: "South Asia" },
  { value: "Middle East", label: "Middle East" },
  { value: "Europe", label: "Europe" },
  { value: "Australia", label: "Australia" },
  { value: "Global", label: "Global" },
];

export function OrganizationTypeSelect() {
  const [type, setType] = useState("");

  return (
    <div>
      <label htmlFor="apply-type" className="section-label block mb-2">
        Organization Type *
      </label>
      <Select
        id="apply-type"
        ariaLabel="Organization type"
        value={type}
        onChange={setType}
        options={typeOptions}
        className={buttonClass}
      />
    </div>
  );
}

export function PrimaryRegionSelect() {
  const [region, setRegion] = useState("");

  return (
    <div>
      <label htmlFor="apply-region" className="section-label block mb-2">
        Primary Region *
      </label>
      <Select
        id="apply-region"
        ariaLabel="Primary region"
        value={region}
        onChange={setRegion}
        options={regionOptions}
        className={buttonClass}
      />
    </div>
  );
}
