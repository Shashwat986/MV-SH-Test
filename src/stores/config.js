import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const baseState = {
    type: "Data Points",
    product_name: "Example",
    rupee: true,
    primary_field: "1,00,000",
    notif_dot: false,
    heading_2: "Rewards Earned",
    c2_color: "green",
    field_2: "₹1,000",
    message_2: "Next EMI #7 Days#",
    field_cta: "Pay Now",
    third_field_type: 'Bottom',
    field_3: "₹37/day",
    message: "Large message that goes to 2 lines\nThis is the second paragraph"
}

export const useConfigStore = defineStore('config', {
    persist: true,
    state: () => {
        return JSON.parse(JSON.stringify(baseState))
    }
})

export const bannerBaseState = {
    product_name: "Example",
    title: "It’s time for the change",
    subtitle: "Last date to complete NACH is 5th Dec, 2022",
    color: "yellow",
    cta: null,
}

export const useBannerConfigStore = defineStore('bannerconfig', {
    persist: true,
    state: () => {
        return JSON.parse(JSON.stringify(bannerBaseState))
    }
})
