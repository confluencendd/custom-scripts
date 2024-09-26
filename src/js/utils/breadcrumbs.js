export function formatBreadcrumbs() {

    const breadcrumbHome = document.querySelector('ol.breadcrumbs > li:nth-child(1) > a')

    if (!breadcrumbHome) {
        console.warn(`WARNING: Breadcrumb not found`);
        return;
    }

    breadcrumbHome.textContent = ""

}